import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA0U02JA_WnUapXiUTswD9c635-0g7lIf0",
  authDomain: "netflix-aa9ec.firebaseapp.com",
  projectId: "netflix-aa9ec",
  storageBucket: "netflix-aa9ec.appspot.com",
  messagingSenderId: "789523350949",
  appId: "1:789523350949:web:59b7baed1dfedfa05b544c",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
