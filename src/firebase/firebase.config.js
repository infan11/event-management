// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey:import.meta.env.VITEapiKey,  
//   authDomain:import.meta.env.VITEauthDomain,
//   projectId:import.meta.env.VITEprojectId,
//   storageBucket:import.meta.env.VITEstorageBucket,
//   messagingSenderId:import.meta.env.VITEmessagingSenderId,
//   appId:import.meta.env.VITEappId
apiKey: "AIzaSyD31GxFUCJQlZSMmq8RaUzLfOLjbhL3ReA",
authDomain: "event--management-c731e.firebaseapp.com",
projectId: "event--management-c731e",
storageBucket: "event--management-c731e.appspot.com",
messagingSenderId: "501411583030",
appId: "1:501411583030:web:3be741e3efb34f99213497"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;