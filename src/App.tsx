import React,{useContext,useRef} from "react";
import {AuthContext} from "./context/AuthContext"
import {auth} from "./firebase"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';

 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Forside from "./components/Forside";



function App() {    
  const user = useContext(AuthContext);
 if (!user){
  return(
    <Forside/>
      )
 }



return (
  

   <></>
  );
}           

export default App;