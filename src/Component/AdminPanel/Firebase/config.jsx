// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQgKGgVPG38utsgj24sdztSsGEWlIql18",
  authDomain: "tacit-group-supply.firebaseapp.com",
  projectId: "tacit-group-supply",
  storageBucket: "tacit-group-supply.firebasestorage.app",
  messagingSenderId: "316012645594",
  appId: "1:316012645594:web:98d172a056d5acb1cba9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };