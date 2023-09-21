import { useEffect, useState } from "react";

import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { addUser } from "../stores/userSlice";

const Layout = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
        const { uid, displayName, email } = user;
        console.log(email)
        // dispatch(addUser(['hello', 'neeraj']))
        dispatch(addUser({
          uid: 'uid',
          displayName: 'displayName',
          email: 'email',
        }))
      } else {
        console.log('Signed Out')
      }
    });
  }, [])

  return isAuth ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
