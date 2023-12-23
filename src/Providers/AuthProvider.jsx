import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import auth from "./Firebase/FirebaseConfig";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (name, photo) =>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            // if user exists then issue a token
            if (currentUser) {
                const userInfo = { email: currentUser?.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                        // console.log(res.data.token)
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [user, axiosPublic])

    
    const authInfo = {
        createUser,
        userLogin,
        googleLogin,
        logOut,
        user,
        loading,
        githubLogin,
        userData,
        setUserData,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;