// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIdwIBnrRivnaQuI8_cpg4fC6gRMfFkcc",
    authDomain: "netflix-clone-207bd.firebaseapp.com",
    projectId: "netflix-clone-207bd",
    storageBucket: "netflix-clone-207bd.appspot.com",
    messagingSenderId: "831531515322",
    appId: "1:831531515322:web:b5bab1d78e79fa3ecb7183",
    measurementId: "G-Z02C9GQML7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }