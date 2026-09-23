import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import CreatorFrame from './CreatorFrame';
import { destinations } from './destinations';
import './WorkPage.css';

const PLATFORMS = [
  'YouTube integration',
  'YouTube Short',
  'Instagram Reel',
  'Short + Reel package',
  'Not sure yet',
];

const emptyForm = {
  name: '',
  email: '',
  brand: '',
  link: '',
  platforms: [],
  timing: '',
  message: '',
};

const WorkPage = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const togglePlatform = (platform) => {
    setForm((current) => {
      const selected = current.platforms.includes(platform)
        ? current.platforms.filter((item) => item !== platform)
        : [...current.platforms, platform];
      return { ...current, platforms: selected };
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(destinations.emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const name = form.name.trim();
    const email = form.email.trim();
    const brand = form.brand.trim();
    const message = form.message.trim();

    if (!name || !email || !brand || !message || form.platforms.length === 0) {
      setError('Add your name, work email, brand, at least one platform, and a short note.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('That email doesn’t look complete.');
      return;
    }

    setStatus('sending');

    try {
      await addDoc(collection(db, 'inquiries'), {
        name,
        email,
        brand,
        link: form.link.trim(),
        platforms: form.platforms,
        timing: form.timing.trim(),
        message,
        createdAt: serverTimestamp(),
      });
      setForm(emptyForm);
      setStatus('sent');
    } catch (submitError) {
      console.error('Inquiry failed:', submitError);
      setStatus('idle');
      setError(`Couldn’t send that just now. You can also copy ${destinations.emailAddress}.`);
    }
  };

  return (
    <CreatorFrame pathLabel="/links/work" title="Cameron Lim — Work with me">
      <h1 className="creator-title">Work with me</h1>
      <p className="creator-lede">
        I partner with brands on YouTube and Instagram. Tell me a little about the campaign and I’ll reply by email.
      </p>

      {status === 'sent' ? (
        <div className="work-success" role="status">
          <h2>Sent</h2>
          <p>Thanks. I have the details and I’ll get back to you at the email you left.</p>
        </div>
      ) : (
        <form className="work-form" onSubmit={handleSubmit} noValidate>
          <div className="work-fields">
            <label>
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                maxLength={80}
                value={form.name}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={120}
                value={form.email}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Brand
              <input
                name="brand"
                type="text"
                maxLength={80}
                value={form.brand}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Site or campaign link
              <input
                name="link"
                type="text"
                inputMode="url"
                maxLength={200}
                value={form.link}
                onChange={updateField}
              />
            </label>
          </div>

          <fieldset className="work-platforms">
            <legend>Platforms</legend>
            <div>
              {PLATFORMS.map((platform) => (
                <label key={platform} className="work-check">
                  <input
                    type="checkbox"
                    checked={form.platforms.includes(platform)}
                    onChange={() => togglePlatform(platform)}
                  />
                  <span>{platform}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="work-span">
            Timing
            <input
              name="timing"
              type="text"
              maxLength={120}
              placeholder="When you’d like to post"
              value={form.timing}
              onChange={updateField}
            />
          </label>

          <label className="work-span">
            Message
            <textarea
              name="message"
              rows={5}
              maxLength={2000}
              value={form.message}
              onChange={updateField}
              required
            />
          </label>

          {error && (
            <p className="work-error" role="alert">{error}</p>
          )}

          <button className="creator-button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send inquiry'}
          </button>
        </form>
      )}

      <div className="work-email">
        <p>Or copy my email</p>
        <button type="button" className="work-copy" onClick={copyEmail}>
          {copied ? 'Copied' : destinations.emailAddress}
        </button>
      </div>
    </CreatorFrame>
  );
};

export default WorkPage;
