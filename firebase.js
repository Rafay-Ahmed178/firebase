// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import { getAuth ,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnKMQvhYxJXEZwUrN8LhCOw_Ns7A0Un3I",
  authDomain: "practice-firebase-ec840.firebaseapp.com",
  projectId: "practice-firebase-ec840",
  storageBucket: "practice-firebase-ec840.appspot.com",
  messagingSenderId: "618075278032",
  appId: "1:618075278032:web:3f4829e7e38f77de70ecd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);

// export let testing = "rafay ahmed "

// export {auth,createUserWithEmailAndPassword};
export { auth,signInWithEmailAndPassword,createUserWithEmailAndPassword };