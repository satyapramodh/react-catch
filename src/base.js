import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyC_mUnx_OSdyYuJeONblYz0fegTG3VabvI",
  authDomain: "catch-of-the-day-pramodh.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-pramodh.firebaseio.com",
  projectId: "catch-of-the-day-pramodh",
  storageBucket: "catch-of-the-day-pramodh.appspot.com",
  messagingSenderId: "873574404791"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;