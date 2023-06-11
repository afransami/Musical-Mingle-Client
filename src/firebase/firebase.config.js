
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
export default app;




// VITE_apiKey=AIzaSyDPZM7NUY4015TE7WmrUdfO1XmSLRyWKoQ
// VITE_authDomain=music-school-client.firebaseapp.com
// VITE_projectId=music-school-client
// VITE_storageBucket=music-school-client.appspot.com
// VITE_messagingSenderId=46382871610
// VITE_appId=1:46382871610:web:36ac470d1565a0c3ef7103

// VITE_imgbb_apiKey=5bfaf6ef66e3348740cac56842131653