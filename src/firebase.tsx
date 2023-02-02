import { initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAW_vS0D-nklGSfxfw1Ab9BpEYDEltMGTs",
  authDomain: "test-fa178.firebaseapp.com",
  projectId: "test-fa178",
  storageBucket: "test-fa178.appspot.com",
  messagingSenderId: "786951890745",
  appId: "1:786951890745:web:28bf92648887107621eae8",
  measurementId: "G-4TZZM7PX1S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
