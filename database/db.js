const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBePxrkWIM96nIBXK-UyzIv3IiRsf-2dFI",
    authDomain: "mern-to-do.firebaseapp.com",
    projectId: "mern-to-do",
    storageBucket: "mern-to-do.appspot.com",
    messagingSenderId: "282613086741",
    appId: "1:282613086741:web:0188fd73f2b6625d3eec1c",
    measurementId: "G-PX4NZCG2DQ"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const tasks = db.collection("tasks")

module.exports = tasks;