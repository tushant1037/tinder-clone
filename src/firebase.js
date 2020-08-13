import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuMdgHkYUmoOEineb41BbUrmCEDHmzAeI",
  authDomain: "tinder-clone-5c451.firebaseapp.com",
  databaseURL: "https://tinder-clone-5c451.firebaseio.com",
  projectId: "tinder-clone-5c451",
  storageBucket: "tinder-clone-5c451.appspot.com",
  messagingSenderId: "801415863248",
  appId: "1:801415863248:web:c0137ecef4004c83f177d5",
  measurementId: "G-1S11286YW4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
