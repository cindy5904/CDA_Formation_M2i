// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA45iKwrqGEKwAtq_evFZ2o-pvu52v4Xcg",
  authDomain: "fir-cee03.firebaseapp.com",
  projectId: "fir-cee03",
  storageBucket: "fir-cee03.appspot.com",
  messagingSenderId: "242280954198",
  appId: "1:242280954198:web:bd8b08325b4ac2f417bef7",
  measurementId: "G-ZNB06K4Y42",
  databaseUrl : "https://fir-cee03-default-rtdb.europe-west1.firebasedatabase.app/"
};

export const BASE_DB_URLv= firebaseConfig.databaseUrl;



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);