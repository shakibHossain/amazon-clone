import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmugr7kU7-TjlAy59frugptBju3xM9msc",
  authDomain: "clone-f13fd.firebaseapp.com",
  databaseURL: "https://clone-f13fd.firebaseio.com",
  projectId: "clone-f13fd",
  storageBucket: "clone-f13fd.appspot.com",
  messagingSenderId: "726909474907",
  appId: "1:726909474907:web:d7ae13d15a736038de077e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
