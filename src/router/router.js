import { createBrowserRouter, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import App from '../App';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Search from '../pages/Search';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from "../pages/Profile";
import { PAGE } from "./routes";

const RouteType = ({ children, type }) => {
  const isLogged = useSelector((store) => store.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === 'private' && !isLogged) {
      navigate(PAGE.SIGNIN);
    } else if (type === 'public' && isLogged) {
      navigate(PAGE.BROWSE);
    }
    return () => {

    }
  }, [isLogged, navigate, type]);

  if (isLogged === null) return <h1 className="h-screen flex justify-center items-center">Loading...</h1>;

  return <>{children}</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RouteType type="public"><Home /></RouteType>,
      },
      {
        path: "/browse",
        element: <RouteType type="private"><Browse /></RouteType>,
      },
      {
        path: "/search",
        element: <RouteType type="private"><Search /></RouteType>,
      },
      {
        path: "/movie-assistant",
        element: <RouteType type="private"><Search /></RouteType>
      },
      {
        path: "/login",
        element: <RouteType type="public"><SignIn /></RouteType>,
      },
      {
        path: "/signup",
        element: <RouteType type="public"><SignUp /></RouteType>,
      },
      {
        path: '/profile',
        element: <RouteType type="private"><Profile /></RouteType>
      }

    ]
  }
]);


export default router;
