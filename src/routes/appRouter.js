import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <h1>Ooops! Page Not Found.</h1>
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
	{
		path: '/browse',
		element: <Browse />,
	},
]);

export default appRouter;

