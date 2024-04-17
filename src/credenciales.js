// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLYLN5LLmqTkM4SVMqRLj8_186_UOuwFY",
  authDomain: "parcial2-45971.firebaseapp.com",
  projectId: "parcial2-45971",
  storageBucket: "parcial2-45971.appspot.com",
  messagingSenderId: "541380831191",
  appId: "1:541380831191:web:521e80ffa0cdb67e920d92",
  measurementId: "G-YGLBWHK84Y"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;