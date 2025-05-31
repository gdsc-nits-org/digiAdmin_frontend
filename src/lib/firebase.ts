import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5rEsJzO7tUt1OxYNXN2YxNbtXddKbov8",
  authDomain: "digiadmin-bd498.firebaseapp.com",
  projectId: "digiadmin-bd498",
  storageBucket: "digiadmin-bd498.firebasestorage.app",
  messagingSenderId: "472621940366",
  appId: "1:472621940366:web:232f4f747ddcaf63b953df",
  measurementId: "G-9ZJ4ZSXSW9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});


export {app, auth}
