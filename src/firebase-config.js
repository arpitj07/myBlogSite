// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBtF-nyVvQCbZJE86cVe7chDKk9Q286gQ0',
	authDomain: 'myblogwebsite-b0cea.firebaseapp.com',
	projectId: 'myblogwebsite-b0cea',
	storageBucket: 'myblogwebsite-b0cea.appspot.com',
	messagingSenderId: '620220285233',
	appId: '1:620220285233:web:e92e684088003443c9f010'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
