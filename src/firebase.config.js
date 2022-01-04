// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD-IqMMGxrKf3_cOg-sIeZ_Ra5bKdzSVws',
	authDomain: 'shimfin-3c3e9.firebaseapp.com',
	projectId: 'shimfin-3c3e9',
	storageBucket: 'shimfin-3c3e9.appspot.com',
	messagingSenderId: '30224937448',
	appId: '1:30224937448:web:bc685b889c0556e214345d',
	measurementId: 'G-1837M5L0N2',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
