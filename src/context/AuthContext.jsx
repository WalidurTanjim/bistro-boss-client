import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config.js';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // google signin
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // createUser
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // updateUserProfile
    const updateUserProfile = (user, name, image) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name,
            photoURL: image
        });
    }

    // signInUser
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // forgetPassword
    const forgetPassword = email => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // logOut
    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("Current user:", currentUser);
        });

        return () => {
            return unsubscribe();
        }
    }, [setUser, setLoading]);

    const info = {
        user,
        loading,
        googleSignin,
        createUser,
        updateUserProfile,
        signInUser,
        forgetPassword,
        logOut
    }


    return (
        <UserContext.Provider value={info}>
            { children }
        </UserContext.Provider>
    );
};

export default AuthContext;