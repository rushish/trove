import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDFI-M3mQgJ77JOt82gRzapnBdK8aGKOc",
    authDomain: "throve-30923.firebaseapp.com",
    projectId: "throve-30923",
    storageBucket: "throve-30923.appspot.com",
    messagingSenderId: "1078467248245",
    appId: "1:1078467248245:web:28f78cda5a5755d6fa783c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);