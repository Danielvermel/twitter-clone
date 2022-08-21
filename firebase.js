// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.FIREBASE_API_KEY,
  authDomain: 'twitter-v1-aa68b.firebaseapp.com',
  projectId: 'twitter-v1-aa68b',
  storageBucket: 'twitter-v1-aa68b.appspot.com',
  messagingSenderId: '1041624289041',
  appId: '1:1041624289041:web:78beec55b146311c42c6b0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
