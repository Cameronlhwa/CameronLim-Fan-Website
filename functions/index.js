const functions = require('firebase-functions/v1');
const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { defineString } = require('firebase-functions/params');
const { Resend } = require('resend');
const admin = require('firebase-admin');
admin.initializeApp();

const WELCOME_IMAGE_URL = '/Jjajjangmyon.jpg';
const ADMIN_UID = 'Ie35osxKxPMkroz5M6jvAe2Suhf2';
const INQUIRY_TO = 'camtvlgs18@gmail.com';
// Set in functions/.env (no Secret Manager / billing required for the param itself)
const resendApiKey = defineString('RESEND_API_KEY');

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

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

exports.sendInquiryEmail = onDocumentCreated(
  {
    document: 'inquiries/{inquiryId}',
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) {
      console.error('Inquiry document missing data');
      return;
    }

    const apiKey = resendApiKey.value();
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      throw new Error('RESEND_API_KEY is not set');
    }

    const platforms = Array.isArray(data.platforms) ? data.platforms.join(', ') : '';
    const subject = `New inquiry from ${data.brand || 'Unknown brand'}`;
    const html = `
      <h2>New work inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Brand:</strong> ${escapeHtml(data.brand)}</p>
      <p><strong>Link:</strong> ${escapeHtml(data.link || '—')}</p>
      <p><strong>Platforms:</strong> ${escapeHtml(platforms || '—')}</p>
      <p><strong>Timing:</strong> ${escapeHtml(data.timing || '—')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: 'Cameron Lim Site <onboarding@resend.dev>',
      to: INQUIRY_TO,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.error('Resend failed:', error);
      throw new Error(error.message || 'Failed to send inquiry email');
    }

    console.log(`Inquiry email sent for ${event.params.inquiryId}`);
  }
);
