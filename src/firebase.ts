import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgyDA7IiNAfBim9b-4Fc7molM9w7sviaA",
  authDomain: "daily-moments-cdd39.firebaseapp.com",
  databaseURL: "https://daily-moments-cdd39.firebaseio.com",
  projectId: "daily-moments-cdd39",
  storageBucket: "daily-moments-cdd39.appspot.com",
  messagingSenderId: "95524271115",
  appId: "1:95524271115:web:d511432a3d8f68ce2d830e"

    
  };
  
 const app = firebase.initializeApp(firebaseConfig);
 export const auth = app.auth();
 export const firestore = app.firestore();
 export const storage = app.storage();


  