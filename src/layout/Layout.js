import { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import AppLayout from "./AppLayout";

const Layout = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return isAuth ? <AppLayout>{children}</AppLayout> : <DefaultLayout>{children}</DefaultLayout>
}

export default Layout;
