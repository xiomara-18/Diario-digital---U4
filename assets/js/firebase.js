  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// Autenticación
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";


   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtusA2GL8S3zipfYwjNuDT7kvAqQSKwgo",
    authDomain: "diario-digital-210e8.firebaseapp.com",
    projectId: "diario-digital-210e8",
    storageBucket: "diario-digital-210e8.appspot.com",
    messagingSenderId: "25577141208",
    appId: "1:25577141208:web:27b0f509c419302c86b8ad"
  };

  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);

   // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
