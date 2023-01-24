import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
     apiKey: "AIzaSyCuMeGg9xPpzDmo2w8skN8B2iBYXdk_VbE",
     authDomain: "chatwebapp-9fef8.firebaseapp.com",
     projectId: "chatwebapp-9fef8",
     storageBucket: "chatwebapp-9fef8.appspot.com",
     messagingSenderId: "361074658814",
     appId: "1:361074658814:web:edf606cef57d46cf2b84af"
}).auth();