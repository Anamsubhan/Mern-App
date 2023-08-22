import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCsK0hFqmtutvSZCZFt31wUauBtH9oeKxQ",
  authDomain: "product-api-72dc6.firebaseapp.com",
  projectId: "product-api-72dc6",
  storageBucket: "product-api-72dc6.appspot.com",
  messagingSenderId: "805819212114",
  appId: "1:805819212114:web:45229f4b9660f8606d1a8b"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)