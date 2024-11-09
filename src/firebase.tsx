// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBYXmj_6ayXGZEIYkxHqJ1hhjcd4JLmwDg",
  authDomain: "love-to-color.firebaseapp.com",
  databaseURL:
    "https://love-to-color-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "love-to-color",
  storageBucket: "love-to-color.firebasestorage.app",
  messagingSenderId: "322789676043",
  appId: "1:322789676043:web:123b7eed12aa22f74b230e",
};

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
