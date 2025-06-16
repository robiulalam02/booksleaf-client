import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, profile_photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profile_photo
        })
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else{
                setUser(null);
                setLoading(true);
            }
        });

        return () => unsubscribe;
    }, [])

    const provider = {
        userRegister,
        userSignIn,
        updateUserProfile,
        userSignOut,
        setLoading,
        loading,
        user
    }
    return (
        <AuthContext value={provider}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;