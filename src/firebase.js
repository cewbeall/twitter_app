// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB2AHT3bnyGgWvxBywWKQUuieIvdL5GQE",
  authDomain: "twitter-e55d1.firebaseapp.com",
  projectId: "twitter-e55d1",
  storageBucket: "twitter-e55d1.appspot.com",
  messagingSenderId: "30733442746",
  appId: "1:30733442746:web:4e9d1c30433965b122ec83",
  measurementId: "G-NRV5RLC6WK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);