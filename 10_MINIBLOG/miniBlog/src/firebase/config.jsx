// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwG9xsYSd6aGJdLXImqPFHirIn_FAyUjk",
  authDomain: "miniblog-3e6dc.firebaseapp.com",
  projectId: "miniblog-3e6dc",
  storageBucket: "miniblog-3e6dc.appspot.com",
  messagingSenderId: "155863109220",
  appId: "1:155863109220:web:42a1e2244be537462cd971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }