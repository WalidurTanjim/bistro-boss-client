import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config.js';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure.jsx';

export const UserContext = createContext(null);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();


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
    const updateUserProfile = (user, name) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name
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
            console.log("Current user:", currentUser);

            if(currentUser?.email){
                const userInfo = { email: currentUser?.email };
                const fetchData = async() => {
                    try{
                        const res = await axiosSecure.post('/create-token', userInfo);
                        const data = await res?.data;
                        console.log('Current user:', data);
                        
                        if(data){
                            setLoading(false);
                        }
                    }catch(err){
                        console.error(err);
                        toast.error(err?.message)
                    }
                };
                fetchData();
            }else{
                const fetchData = async() => {
                    try{
                        const res = await axiosSecure.post('/logout', {});
                        const data = await res?.data;
                        console.log('Logout:', data);

                        if(data){
                            setLoading(false);
                        }
                    }catch(err){
                        console.error(err);
                        toast.error(err?.message);
                    }
                };
                fetchData();
            }
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