// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NJSX6SlWnyXpauyXGU1HYJ3eVx3Qshg",
  authDomain: "action-hero-toys.firebaseapp.com",
  projectId: "action-hero-toys",
  storageBucket: "action-hero-toys.appspot.com",
  messagingSenderId: "522457231205",
  appId: "1:522457231205:web:08f07d6771f1ee458cbb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app