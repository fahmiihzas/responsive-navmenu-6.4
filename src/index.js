import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About'
import Experience from './routes/Experience'
import Navbar from './components/Navbar'

import ErrorPage from "./routes/ErrorPages"
import './App.css'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ]
}
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);