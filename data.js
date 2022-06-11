// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2OmeXPUWHthz3-IyjZ4-JtQ8JR7Gb3hU",
  authDomain: "login-5f542.firebaseapp.com",
  databaseURL: "https://login-5f542-default-rtdb.firebaseio.com",
  projectId: "login-5f542",
  storageBucket: "login-5f542.appspot.com",
  messagingSenderId: "1071596370334",
  appId: "1:1071596370334:web:76229c013d67a51685be8f",
  measurementId: "G-373XG00STX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//refrence your database
var Login = firebase.database(.ref('Login'))

document.getElementById('LogIn').addEventListener('submit', submitForm)



function sumbitForm(e){
  e.preventDefault();

  var emailid = getElementVal('emailid')
  var pass = getElementVal('pass')
  saveMessages(emailid,pass);

}
console.log(emailid,pass) ==> {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      emailid: emailid,
      pass: pass,
    });
}

const getElementVal = (id) ==>{
  return document.getElementById(id).value;
}