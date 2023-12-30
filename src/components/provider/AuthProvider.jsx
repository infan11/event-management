
import { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

import app from '../..//firebase/firebase.config';
export  const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    

const [ user , setUser  ]= useState(null);
const [loading , setLoading ] = useState(false)

// create user

const createUser = (email ,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
// google 
const googleSignIn = (email ,password) =>{
    setLoading(true)
    return signInWithPopup(auth  ,googleProvider)
} 
// github
const githubSignIn = (email, password)=>{
  return signInWithPopup(auth , githubProvider)
}
// signIn 
const signIn = (email , password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}
// log out

const logOut = (email , password) =>{
    setLoading(true)
    return signOut(auth)
}
// updateProfile
const updateUserProfile  = (name, photo) =>{
    return updateProfile(auth.currentUser ,{
        displayName: name,photoURL:photo
    })

}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return() =>{
        return unSubscribe()
    }
},[])
   
const authInfo ={
    user,
     loading,
     createUser,
     googleSignIn,
     githubSignIn,
     logOut,
     signIn,
     updateUserProfile
    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;