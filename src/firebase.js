import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  authDomain: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  projectId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  storageBucket: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  messagingSenderId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  appId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
  measurementId: "AIzaSyB9lAtfYv3OpalOruizpjI06qYurqI5bo4",
};

// firebase.firestore.enablePersistence();
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
