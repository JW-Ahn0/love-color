// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_KEY,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
console.log(database);
export const getCngrtMsg = async () => {
  const dbRef = ref(database);

  return get(child(dbRef, "/CngrtMsg"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.entries(snapshot.val());
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const storage = getStorage(app);
export const messaging = getMessaging(app);
