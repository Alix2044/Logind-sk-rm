import React,{ useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";

import { auth } from "../firebase";
import {User} from "firebase/auth"


export default function AuthProvider({ children}:any) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};