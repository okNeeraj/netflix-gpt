import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }

    ]
  }
]);

export default router;
