// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEy4Vkx5V-Ox8wjhPA8vRtHVMyXvVy3a4",
  authDomain: "shopyhne.firebaseapp.com",
  projectId: "shopyhne",
  storageBucket: "shopyhne.appspot.com",
  messagingSenderId: "455425351464",
  appId: "1:455425351464:web:94e8b61640e5d821ad7a1d",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export async function getProduct() {
    const productCol = collection(db, 'Products');
    const productSnapshot = await getDocs(productCol);
    const productList = productSnapshot.docs.map(doc => doc.data());
    return productList;
  }
