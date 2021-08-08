import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAf3urtYn-tifWpV0KjJxXwewfDxcM8HtQ",
    authDomain: "netflix-64417.firebaseapp.com",
    projectId: "netflix-64417",
    storageBucket: "netflix-64417.appspot.com",
    messagingSenderId: "792040722610",
    appId: "1:792040722610:web:adb7c336138ebed681f9ab",
    measurementId: "G-HWH89FWM8C"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;