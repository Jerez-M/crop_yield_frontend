import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorPage from './ErrorPage';
import PredictionPage from './PredictionPage';
import NdviPage from './NdviPage';
import { Map } from './gis/Map';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/predictions',
    element: <PredictionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ndvi',
    element: <NdviPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/remote-sensing',
    element: <Map />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RouterProvider>
);