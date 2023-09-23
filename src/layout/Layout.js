import { useEffect, useState } from "react";

import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { addUser } from "../stores/userSlice";

const Layout = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
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
        }))
      } else {
        console.log('Signed Out')
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setIsLogged(loggedUser)
  }, [loggedUser]);

  return isLogged ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
