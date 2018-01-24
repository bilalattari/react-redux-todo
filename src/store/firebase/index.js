
import React from 'react'
import firebase from 'firebase'


 var config = {
    apiKey: "AIzaSyCUaDmNduaaYP3X3I-Q-HCunndU0CcesBM",
    authDomain: "todoapp-bcbfe.firebaseapp.com",
    databaseURL: "https://todoapp-bcbfe.firebaseio.com",
    projectId: "todoapp-bcbfe",
    storageBucket: "todoapp-bcbfe.appspot.com",
    messagingSenderId: "620098462611"
  };
  firebase.initializeApp(config);


export const auth = () => {
    firebase.auth()
}

export const db = () => {
    firebase.database()
}
