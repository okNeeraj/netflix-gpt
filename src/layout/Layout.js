import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../stores/userSlice";

import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";
import { setAuthenticated } from "../stores/authSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL, phoneNumber } = user;
        dispatch(addUser({
          uid: uid,
          displayName: displayName,
          photoURL: photoURL,
          email: email,
          phoneNumber: phoneNumber
        }));
        console.log('signed in')
        dispatch(setAuthenticated(true))
      } else {
        console.log('signed out')
        dispatch(setAuthenticated(false))
        dispatch(removeUser())
      }
    });
    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);

  const isLogged = useSelector((store) => store.authenticated);
  if (isLogged === null) return <h1 className="h-screen flex justify-center items-center">Loading Layout...</h1>

  return isLogged ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
