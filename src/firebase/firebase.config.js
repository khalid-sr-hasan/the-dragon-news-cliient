// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw8SbHho6GkHyG6xHseFTDtm6db1bDlzI",
    authDomain: "the-news-dragon-client-27dd2.firebaseapp.com",
    projectId: "the-news-dragon-client-27dd2",
    storageBucket: "the-news-dragon-client-27dd2.appspot.com",
    messagingSenderId: "720863273177",
    appId: "1:720863273177:web:11991e94c3f8ce71a1dec8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
