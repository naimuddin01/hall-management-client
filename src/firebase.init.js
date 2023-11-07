// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APPID,
  apiKey: "AIzaSyCHy1haSoJADTH5JNHAhnDxnyDGcWwXhQo",
  authDomain: "hall-management-f7189.firebaseapp.com",
  projectId: "hall-management-f7189",
  storageBucket: "hall-management-f7189.appspot.com",
  messagingSenderId: "265179700650",
  appId: "1:265179700650:web:3b70875cf7a3ed2f035fd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;