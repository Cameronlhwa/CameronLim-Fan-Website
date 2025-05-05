// setAdminClaims.cjs
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cameron-lim-community.firebaseio.com' // From your config
});

const ADMIN_UID = 'Ie35osxKxPMkroz5M6jvAe2Suhf2'; // Replace with your actual UID

async function setAdminClaims() {
  try {
    await admin.auth().setCustomUserClaims(ADMIN_UID, { 
      admin: true 
    });
    console.log('✅ Admin claims set successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

setAdminClaims();