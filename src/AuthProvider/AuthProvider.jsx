/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }
    const logOut = () =>{
        return signOut (auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            console.log('authState', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        } ) 
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo ={
        user, 
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;