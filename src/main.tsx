import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-material-symbols/outlined";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Home from "./Home.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
