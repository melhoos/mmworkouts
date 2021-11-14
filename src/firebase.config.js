// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export { db };
