import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDsi_mR6u3AJQ3aJt6vEivx3AdKGgimw5s",
  authDomain: "college-management-340b3.firebaseapp.com",
  projectId: "college-management-340b3",
  storageBucket: "college-management-340b3.firebasestorage.app",
  messagingSenderId: "375343355341",
  appId: "1:375343355341:web:6065e86a9d1b7860216084",
  measurementId: "G-ZDDH66F3EH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, analytics };
