import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDXRYsDcTzgXv77Q-NpHCs6uK2EdiTgfb4",
  authDomain: "justclickjobs-ad043.firebaseapp.com",
  projectId: "justclickjobs-ad043",
  storageBucket: "justclickjobs-ad043.appspot.com",
  messagingSenderId: "417985150749",
  appId: "1:417985150749:web:c848fd5572e24c68daebf4",
  measurementId: "G-R7QG89M1FD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();