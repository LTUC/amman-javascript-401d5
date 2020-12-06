import * as firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyABz-Sf8Za5Cx_lqhOIhZESoTwdzQ3Q0fI',
  authDomain: 'rn-401d5.firebaseapp.com',
  projectId: 'rn-401d5',
  storageBucket: 'rn-401d5.appspot.com',
  messagingSenderId: '72066675199',
  appId: '1:72066675199:web:b4f7410233a055971ff7ca',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
