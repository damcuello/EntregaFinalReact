import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVpuHM9AWS-5YJldUWIHio_LyNyMpqFKY",
  authDomain: "proyectoreact-684fd.firebaseapp.com",
  projectId: "proyectoreact-684fd",
  storageBucket: "proyectoreact-684fd.appspot.com",
  messagingSenderId: "1066706920655",
  appId: "1:1066706920655:web:7932ece020c121265783ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
