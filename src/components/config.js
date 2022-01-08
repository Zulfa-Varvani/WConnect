import {initializeApp} from "firebase/app";
import { useState, useEffect } from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function register(name, email, password){
    return createUserWithEmailAndPassword(auth, email, password).then((user) =>{
        updateProfile(user.user, {displayName: name});
    });
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout(){
    return signOut(auth);
}

export function useAuth() {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {setUser(user)});
        return unsub;
    }, [])

    return user;
}