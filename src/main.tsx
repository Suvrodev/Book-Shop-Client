import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/routes";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <div>
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </div>
);
