import { createBrowserRouter, redirect } from 'react-router-dom';
import App from '../App';
import Applications from '../components/Pages/Applications/Applications';
import Settings from '../components/Pages/Settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Applications /> },
      { path: '/applications', element: <Applications /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;
