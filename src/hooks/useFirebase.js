import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    const interval = setInterval(() => {
      setError(error ? error : "");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const userRegistrationHandler = (event) => {
    event.preventDefault();

    if (UserPassword.length < 6) {
      setError("Password must be atleast 6 characters!");
      return;
    }

    return createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
  };

  const signInUsingEmailAndPassword = (event) => {
    event.preventDefault();

    return signInWithEmailAndPassword(auth, UserEmail, UserPassword);
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, { displayName: userName })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const signInUsingFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, UserEmail)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return {
    user,
    signInUsingGoogle,
    signInUsingFacebook,
    userRegistrationHandler,
    signInUsingEmailAndPassword,
    nameChangeHandler,
    passwordChangeHandler,
    emailChangeHandler,
    resetPassword,
    logOut,
    error,
    setError,
    updateUserProfile,
  };
};

export default useFirebase;
