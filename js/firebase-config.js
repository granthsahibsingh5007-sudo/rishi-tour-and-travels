import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4LNqQ0PZvsiPLnLMJjb_UYVoBjrozZ0s",
  authDomain: "rishi-tour-and-travels-4d106.firebaseapp.com",
  projectId: "rishi-tour-and-travels-4d106",
  storageBucket: "rishi-tour-and-travels-4d106.firebasestorage.app",
  messagingSenderId: "259915637261",
  appId: "1:259915637261:web:4c9377b25fd849c39cab44",
  measurementId: "G-9BXQE234F5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
