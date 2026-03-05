import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxapgJwKoKwOLmAFq9gcedvHYUxabQ82A",
  authDomain: "vitosik-test-cross.firebaseapp.com",
  projectId: "vitosik-test-cross",
  storageBucket: "vitosik-test-cross.firebasestorage.app",
  messagingSenderId: "794167716122",
  appId: "1:794167716122:web:0982215df3045ecd9424a3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);