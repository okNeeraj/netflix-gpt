import { RouterProvider } from 'react-router-dom';
import appRouter from './routes/appRouter';
import './App.css';
import Layout from './layout/Layout';


const App = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </>
  )
}

export default App;
