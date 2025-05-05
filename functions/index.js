const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.setAdminClaim = functions.https.onRequest(async (req, res) => {
  const adminUserId = 'YOUR_ADMIN_UID_HERE'; // Replace with your UID from Firebase Authentication
  
  try {
    await admin.auth().setCustomUserClaims(adminUserId, { 
      admin: true,
      role: 'super-admin'
    });
    
    res.status(200).send('Admin claims added successfully');
  } catch (error) {
    console.error('Error setting claims:', error);
    res.status(500).send('Error setting admin claims');
  }
});