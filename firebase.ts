// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFg3qUPKFwpSmLmODxD5UMVpY45-bpumI",
    authDomain: "netflix-clone-65f40.firebaseapp.com",
    projectId: "netflix-clone-65f40",
    storageBucket: "netflix-clone-65f40.appspot.com",
    messagingSenderId: "1014528162671",
    appId: "1:1014528162671:web:7d868206c18223f9c0069a"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }