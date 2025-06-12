import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, profile_photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profile_photo
        })
    }

    const provider = {
        userRegister,
        updateUserProfile
    }
    return (
        <AuthContext value={provider}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;