import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../stores/userSlice";

import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";
import { setAuthenticated } from "../stores/authSlice";
import Spinner from "../components/Spinner";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        // console.log('signed in')
        dispatch(setAuthenticated(true))
      } else {
        // console.log('signed out')
        dispatch(setAuthenticated(false))
        dispatch(removeUser())
      }
    });

    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);

  const isLogged = useSelector((store) => store.authenticated);
  if (isLogged === null) return <Spinner />

  return isLogged ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
