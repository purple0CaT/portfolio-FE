// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREB_APIKEY,
  authDomain: process.env.REACT_APP_FIREB_AUTHDOM,
  projectId: process.env.REACT_APP_FIREB_PROJID,
  storageBucket: process.env.REACT_APP_FIREB_STOR_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREB_MESS_SEND_ID,
  appId: process.env.REACT_APP_FIREB_APPID,
  measurementId: process.env.REACT_APP_FIREB_MEASURID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
