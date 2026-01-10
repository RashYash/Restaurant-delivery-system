import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIMGY8JVQ7b24tpP7bmoCO-00ukF4qPME",
  authDomain: "restaurantdelivery-9f413.firebaseapp.com",
  projectId: "restaurantdelivery-9f413",
  storageBucket: "restaurantdelivery-9f413.firebasestorage.app",
  messagingSenderId: "16968788514",
  appId: "1:16968788514:web:8271d40c04ef3e68a4f87b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
