import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4VbG5hJ19P1PmJeZtqq8PHOAM51WlCng",  
    authDomain: "proyectoreact-62343.firebaseapp.com",  
    projectId: "proyectoreact-62343",  
    storageBucket: "proyectoreact-62343.appspot.com",  
    messagingSenderId: "103388845252",  
    appId: "1:103388845252:web:affcbefb0b64f83b6ae591"  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}