import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = require('../../../0--firebase-keys/firebase-sdk.json');

initializeApp({
	credential: cert(serviceAccount),
});

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

(async () => {
	await docRef.set({
		first: 'Ada',
		last: 'Lovelace',
		born: 1815,
	});
})();
