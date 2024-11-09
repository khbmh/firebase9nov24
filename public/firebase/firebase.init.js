// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCf8fXjNtzMByVicIeyzZOkxiL3WRu2F6M',
  authDomain: 'ph-pr1.firebaseapp.com',
  projectId: 'ph-pr1',
  storageBucket: 'ph-pr1.firebasestorage.app',
  messagingSenderId: '1012968250081',
  appId: '1:1012968250081:web:4cd60e0c6f6101635335a0',
  measurementId: 'G-9FGJD0H3M1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app, analytics);

export default auth;
