//IOS: 1040588492446-b18h6bpmr77qh0vb72sfkoapunflpclr.apps.googleusercontent.com
//Android: 1040588492446-piu0jm9762i8pb4i876qdrkev0jeiu3b.apps.googleusercontent.com

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwp4fvnajKLqxjLokRqt1mI0JMpXYBAPM",
  authDomain: "logindps-11c1e.firebaseapp.com",
  projectId: "logindps-11c1e",
  storageBucket: "logindps-11c1e.appspot.com",
  messagingSenderId: "1040588492446",
  appId: "1:1040588492446:web:928252cffee66024b4b58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };