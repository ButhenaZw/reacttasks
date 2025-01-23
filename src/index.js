import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Task/day3/home';
import About from './Task/day3/about';
import Contact from './Task/day3/contact';

const routes = createBrowserRouter([
  {
    path: '/a',
    element: <Home />,
  },
  {
    path: '/b',
    element: <About />,
  },
  {
    path: '/c',
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

reportWebVitals();
