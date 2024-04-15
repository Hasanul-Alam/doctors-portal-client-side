import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // Auth
    const auth = getAuth();

    // Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log('user is successfully registered.');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // Login user with email and password
    const loginWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log('Login successfull.');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // Google Sign-In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .then(error => {
            setError(error.message);
        })
    }

    // Logout user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successfull');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Observe user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unSubscribe;
    }, [])

    return {
        user,
        error,
        registerUser,
        loginWithEmailAndPassword,
        googleSignIn,
        logOut
    }
}

export default useFirebase;