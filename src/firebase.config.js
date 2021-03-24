import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBizRCKEPx7SjVOVC8nu8U9QfsPfx0WNc0',
  authDomain: 'mmworkouts-20a70.firebaseapp.com',
  projectId: 'mmworkouts-20a70',
  storageBucket: 'mmworkouts-20a70.appspot.com',
  messagingSenderId: '923233968884',
  appId: '1:923233968884:web:4363838c55b71080c2f4a1',
  measurementId: 'G-7GB92XLDR6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
