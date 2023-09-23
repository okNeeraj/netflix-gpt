import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../stores/userSlice";

import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";
import { PAGE } from "../router/routes";

const Layout = ({ children }) => {
  const [isLogged, setIsLogged] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector(store => store.user);

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
        setIsLogged(true)
        navigate(PAGE.BROWSE)
      } else {
        setIsLogged(false)
        dispatch(removeUser())
        navigate(PAGE.SIGNIN)
      }
    });
    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);

  if (isLogged === null) return <h1 className="h-screen flex justify-center items-center">Loading...</h1>

  return isLogged ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
