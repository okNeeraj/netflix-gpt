import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Login from '../pages/Login';

const routes = createBrowserRouter([
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
        element: <Login />,
      },
    ]
  },
]);

export default routes;
