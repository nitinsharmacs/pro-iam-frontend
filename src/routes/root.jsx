import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Applications from '../Pages/Applications/Applications';
import Settings from '../Pages/Settings/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Applications />,
      },
      {
        path: '/applications',
        element: <Applications />,
      },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

export default router;
