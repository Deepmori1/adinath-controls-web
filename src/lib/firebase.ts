import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'YOUR_REAL_API_KEY',
  authDomain: 'adinath-controls.firebaseapp.com',
  projectId: 'adinath-controls',           // <-- This must be real
  storageBucket: 'adinath-controls.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const db = getFirestore(app)
