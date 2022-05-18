// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsu8H9oDN9YQXU2lresJDDFp5OZfl_FLU",
  authDomain: "todo-app-f3cd8.firebaseapp.com",
  projectId: "todo-app-f3cd8",
  storageBucket: "todo-app-f3cd8.appspot.com",
  messagingSenderId: "190813452724",
  appId: "1:190813452724:web:3bd9a89825f20a5ee7dae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;