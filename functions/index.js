const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const WELCOME_IMAGE_URL = '/Jjajjangmyon.jpg';
const ADMIN_UID = 'Ie35osxKxPMkroz5M6jvAe2Suhf2';

exports.sendWelcomeMessage = functions.auth.user().onCreate(async (userRecord) => {
  try {
    // Ensure user exists and is not admin
    if (!userRecord || userRecord.uid === ADMIN_UID) return null;

    // Create message document
    const messageData = {
      senderId: ADMIN_UID,
      receiverId: userRecord.uid,
      content: "Welcome to the chat! Here's a photo of my favorite meal 🖤",
      imageUrl: WELCOME_IMAGE_URL,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      read: false,
      type: 'image',
      isBroadcast: false
    };

    // Write to Firestore
    const docRef = await admin.firestore().collection('messages').add(messageData);
    
    // Verify write operation
    const doc = await docRef.get();
    return doc.exists ? 
      console.log(`Welcome message sent to ${userRecord.uid}`) :
      Promise.reject('Message document not created');

  } catch (error) {
    console.error('Error in sendWelcomeMessage:', error);
    return Promise.reject(error);
  }
});