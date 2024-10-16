import { ReactLenis } from "lenis/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-material-symbols/outlined";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout.tsx";

import Header from "./components/ui/header.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root options={{ duration: 0.8 }}>
        <Header />
        <Layout />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
);
