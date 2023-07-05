 import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout from './AppLayout'
import './custom.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home.jsx';
import PlayerDetails from './views/Details';
import CreatePlayer from './views/Create';
import EditPlayer from './views/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <PlayerDetails />
      },
      {
        path: "/create",
        element: <CreatePlayer />
      },
      {
        path: "/edit/:id",
        element: <EditPlayer />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
