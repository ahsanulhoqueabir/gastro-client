import { createContext, useEffect, useState, useContext } from "react";
import { app } from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [userRole, setRole] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUpewithemail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinwithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logout = () => {
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      // get and set token
      if (!user) {
        localStorage.removeItem("access-token");
      }
      if (user) {
        axios
          .post("http://localhost:3000/jwt", {
            email: user?.email,
          })
          .then((res) => {
            localStorage.setItem("access-token", res.data.token);
          });
      }
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
    signUpewithemail,
    profileUpdate,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
