import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../../firebase/firebase.config"
import PropTypes from 'prop-types';
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user , setUser ] = useState(null);
    const [loading , setLoading ] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signIn = (email , password ) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth ,email , password );
    }
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user ,
        createUser,
        logOut,
        signIn,
        loading
    }

    if(loading) return <span className="loading loading-spinner loading-lg"></span>
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}