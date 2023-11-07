import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"; 
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import app from "./firebase.config"; 


const auth = getAuth(app);
export const AuthContext = createContext(null); 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (emai, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, emai, password);
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   const handleUpdateProfile = (name, photo) =>{
    setLoading(true);
    return updateProfile(auth.currentUser , {
      displayName: name, photoURL: photo
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email; 
      const loggedUser = { email: userEmail}; 
      setUser(currentUser);
      setLoading(false);

      if(currentUser){
        axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials : true})   
        .then(res => { 
          console.log("token response" , res.data);   
        })
      }
      else{
         axios.post("http://localhost:5000/logout", loggedUser, {withCredentials : true}) 
         .then(res => {
            console.log(res.data);  
         })
      }


    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
    signinWithGoogle,
    logOut,
    handleUpdateProfile,
   loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
