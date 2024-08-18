import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CoursePage from "./pages/CoursePage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <LandingPage /> } ,  { path: "/about", element: <AboutPage/> },{ path: "/course", element: <CoursePage/> }],
  },
 
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
