import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Home from './Home';

// Define the routes with the new future flag for partial hydration
const router = createBrowserRouter(
  [
    {
      path: '/', // The parent route
      element: <App />,
      children: [
        {
          path: 'login', // Path for the login page
          element: <Login />,
        },
        {
          path: '', // Default route for the home page (empty string represents the root child route)
          element: <Home />,
        },
      ],
    },
  ],
  {
    future: {
      v7_partialHydration: true, // Opt-in to the new hydration behavior in v7
    },
  },
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
