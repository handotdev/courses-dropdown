// import file system
const fs = require('fs');
// import Firebase from 'firebase'
const firebase = require('firebase');
// import firebase configuration credentials hidden from gith
const { firebaseConfig } = require('./config');

const getData = async () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    
    // firebase collection
    const courses = await db.collection('emails').get();
    
    courses.map(val => {
        console.log(val.title);
    })
}

getData();