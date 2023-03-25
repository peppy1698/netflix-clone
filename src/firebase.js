import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDakNIPPv2JHAjDN6JppY_c0EkNfP1gZ7w',
  authDomain: 'netflix-clone-8cba9.firebaseapp.com',
  projectId: 'netflix-clone-8cba9',
  storageBucket: 'netflix-clone-8cba9.appspot.com',
  messagingSenderId: '218549984218',
  appId: '1:218549984218:web:55810c9cebb44c22b17ee3',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;
