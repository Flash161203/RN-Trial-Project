// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vqpDJDN25sYDAYbg6BgzGJr5kaWTgOg",
  authDomain: "eat-at-nus.firebaseapp.com",
  databaseURL: "https://eat-at-nus-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eat-at-nus",
  storageBucket: "eat-at-nus.appspot.com",
  messagingSenderId: "995649684976",
  appId: "1:995649684976:web:7cc0c479843ef76e990935",
  measurementId: "G-MDH1QNYS7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Database object
export const db = getDatabase(app);

// Get Storage object
export const storage = getStorage(app);
