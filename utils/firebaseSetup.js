import firebase from 'firebase/app';
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbm__iPgWpFvM3xVuJfltLGEcHl2KS2Zs',
  authDomain: 'dywizjon-303.firebaseapp.com',
  databaseURL: 'https://dywizjon-303.firebaseio.com',
  projectId: 'dywizjon-303',
  storageBucket: 'dywizjon-303.appspot.com',
  messagingSenderId: '69401916518',
  appId: '1:69401916518:web:e9c98f928b6658a03e69a7',
  measurementId: 'G-90FD27N3BC',
};

// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  if ('measurementId' in firebaseConfig) firebase.analytics();
}

export default firebase;
