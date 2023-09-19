import { Outlet } from 'react-router-dom';

import './App.css';
import Layout from './layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App;
