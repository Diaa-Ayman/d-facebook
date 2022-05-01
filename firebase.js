import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBEjdUWAIVZge4Yiaywm026x21TN7ihPAs',
  authDomain: 'facebook-clone-6a7b1.firebaseapp.com',
  projectId: 'facebook-clone-6a7b1',
  storageBucket: 'facebook-clone-6a7b1.appspot.com',
  messagingSenderId: '685764013736',
  appId: '1:685764013736:web:daa6586744ebc5c4269c9d',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
