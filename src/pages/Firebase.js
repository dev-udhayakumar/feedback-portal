import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDrEcpHGpjHJjuPkhH2sVTXVjcTHIK2AKM",
    authDomain: "studentreport-dev-udhayakumar.firebaseapp.com",
    databaseURL: "https://studentreport-dev-udhayakumar-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "studentreport-dev-udhayakumar",
    storageBucket: "studentreport-dev-udhayakumar.appspot.com",
    messagingSenderId: "415775602826",
    appId: "1:415775602826:web:0fb30f14595372305b5573",
    measurementId: "G-GWSECCZ6HM"
});
var FireBase = firebaseConfig.firestore();

export {
  FireBase
};

export default firebaseConfig;