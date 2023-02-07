import { Outlet, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

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
