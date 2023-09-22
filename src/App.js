import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import Layout from './layout/Layout';
import appStore from './stores/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  )
}

export default App;
