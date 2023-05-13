import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBpC2zWQA1yXOkknEC_dIrZ2qjX26Y07Eg",
	authDomain: "e-lib-c0cf4.firebaseapp.com",
	projectId: "e-lib-c0cf4",
	storageBucket: "e-lib-c0cf4.appspot.com",
	messagingSenderId: "551761321606",
	appId: "1:551761321606:web:8c604dd5f96524a4387b07"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
