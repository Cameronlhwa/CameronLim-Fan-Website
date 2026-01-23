import { useState } from 'react';
import './MessageBubble.css';

const MessageBubble = ({ message, isSent, currentUserName, senderName }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [translatedText, setTranslatedText] = useState('');

  // Name personalization: replace {{name}} or {{firstName}} with user's display name
  const personalizeMessage = (text) => {
    if (!text || !currentUserName) return text;
    const firstName = currentUserName.split(' ')[0];
    return text
      .replace(/\{\{name\}\}/g, currentUserName)
      .replace(/\{\{firstName\}\}/g, firstName);
  };

  const handleTranslate = async () => {
    if (showTranslation) {
      setShowTranslation(false);
      return;
    }
    
    // Placeholder for translation - in production, you'd call a translation API
    // For now, we'll just show a placeholder
    setTranslatedText('Translation feature coming soon');
    setShowTranslation(true);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  const getSenderName = () => {
    if (isSent) return currentUserName || 'You';
    return senderName || 'Cameron Lim';
  };

  const resolveImageUrl = () => {
    const candidates = [
      message.imageUrl,
      message.imageURL,
      message.image,
      message.image_path
    ];
    const directUrl = candidates.find((value) => typeof value === 'string' && value.trim().length > 0);
    if (directUrl) return directUrl;
    if (message.type === 'image' && typeof message.content === 'string' && /^https?:\/\//i.test(message.content)) {
      return message.content;
    }
    return null;
  };

  const content = personalizeMessage(message.content);
  const isSpecial = message.isSpecial || false;
  const imageUrl = resolveImageUrl();
  const shouldShowImageFallback = message.type === 'image' && !imageUrl;

  return (
    <div className={`message-bubble-wrapper ${isSent ? 'sent' : 'received'}`}>
      <div className={`message-bubble ${isSent ? 'sent' : 'received'} ${isSpecial ? 'special' : ''}`}>
        <div className="message-header">
          <span className="message-sender">{getSenderName()}</span>
          <span className="message-time">{formatTime(message.timestamp)}</span>
        </div>
        <div className="message-content-wrapper">
          {imageUrl && (
            <div className="message-image-container">
              <img 
                src={imageUrl} 
                alt="Shared" 
                className="message-image"
                loading="lazy"
              />
            </div>
          )}
          {shouldShowImageFallback && (
            <p className="message-text message-image-fallback">Image unavailable</p>
          )}
          {content && (
            <p className="message-text">
              {content}
              {isSpecial && <span className="special-icon"> ✨</span>}
            </p>
          )}
        </div>
        {!isSent && (
          <div className="message-footer">
            <button 
              className="translate-button"
              onClick={handleTranslate}
              title="Translate"
            >
              Translate
            </button>
          </div>
        )}
        {showTranslation && translatedText && (
          <div className="translation-text">{translatedText}</div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;

