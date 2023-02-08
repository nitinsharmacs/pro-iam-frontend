import { Outlet } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <div className='app'>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
