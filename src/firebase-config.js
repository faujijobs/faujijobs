import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC79B_bpUHz4oVG1SC3q3VcdXJxeRbaS58",
    authDomain: "faujijobs-2f705.firebaseapp.com",
    projectId: "faujijobs-2f705",
    storageBucket: "faujijobs-2f705.appspot.com",
    messagingSenderId: "325047558262",
    appId: "1:325047558262:web:b71818b1bb4e34c783bf57",
    measurementId: "G-Q62DF51832"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)