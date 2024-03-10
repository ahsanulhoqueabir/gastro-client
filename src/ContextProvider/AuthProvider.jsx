import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinwithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setAuthLoading(false);
    });
    return unsubscribe;
  }, [user]);

  const authInfo = {
    googleSignIn,
    emailPasswordSignIn,
    logout,
    signinwithGithub,
    user,
    authLoading,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
