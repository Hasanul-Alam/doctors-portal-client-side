import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);

    // Auth
    const auth = getAuth();

    // Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                setOpenModal(true);
            })
            .catch(error => {
                setError(error.message);
                setOpenModal(false);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // Login user with email and password
    const loginWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    // Google Sign-In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .then(error => {
                setError(error.message);
            })
    }

    // Logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Observe user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])

    return {
        user,
        error,
        isLoading,
        openModal,
        setOpenModal,
        registerUser,
        loginWithEmailAndPassword,
        googleSignIn,
        setError,
        setUser,
        setIsLoading,
        logOut
    }
}

export default useFirebase;