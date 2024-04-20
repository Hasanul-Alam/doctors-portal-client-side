import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

// Initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Auth
    const auth = getAuth();

    // Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

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
                const user = result.user;
                setUser(user);
                saveGoogleUser(user.email, user.displayName)
                setError('');
            })
            .catch(error => {
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

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('http://localhost:5000/users', user)
        .then(res => console.log(res.data))
        .catch(error => {
            console.log(error);
        })
    }

    const saveGoogleUser = (email, displayName) => {
        const user= {email, displayName};
        axios.put('http://localhost:5000/users', user)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return {
        user,
        error,
        isLoading,
        auth,
        setUser,
        registerUser,
        loginWithEmailAndPassword,
        googleSignIn,
        setError,
        setIsLoading,
        saveUser,
        logOut
    }
}

export default useFirebase;