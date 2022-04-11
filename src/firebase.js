import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBpbAD9jPWdMzTSrA7oHEpddXkJc5g1nsA",
  authDomain: "pizza-kitchen-development.firebaseapp.com",
  projectId: "pizza-kitchen-development",
  storageBucket: "pizza-kitchen-development.appspot.com",
  messagingSenderId: "862439627643",
  appId: "1:862439627643:web:cf2092a3fef91525863bde"
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }