
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD9r8fff3nbghaz32A1CyJuXYWZAkI7y8",
  authDomain: "aquachat-90912.firebaseapp.com",
  projectId: "aquachat-90912",
  storageBucket: "aquachat-90912.appspot.com",
  messagingSenderId: "959367021707",
  appId: "1:959367021707:web:1fc380cd655a3363c7808e",
};

 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);