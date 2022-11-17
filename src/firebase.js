// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  authDomain: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  projectId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  storageBucket: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  messagingSenderId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  appId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  measurementId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
