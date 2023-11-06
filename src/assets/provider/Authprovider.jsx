
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import {  createContext, useEffect, useState } from "react";
export const AuthContext = createContext()
const Auth  = getAuth(app)

const Authprovider = ( {children}) => {
    const [ user,setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const  createUser = ( email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(Auth,email,password);
    }
    const signIn = (email , password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(Auth ,email , password);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(Auth);
    }
    
    useEffect( ()=>{
       const unsubscribe= onAuthStateChanged(Auth,currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    })

    const authInf ={
        user,
        loading,
        createUser,
        signIn,
        logOut
        

    }



    return (
        <AuthContext.Provider value={authInf}>{children}

        </AuthContext.Provider>
    );
};

export default Authprovider;