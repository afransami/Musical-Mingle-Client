import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Layouts/Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <div className="">
          <div><Toaster/>
            <RouterProvider router={router} />
          </div>
          </div>
        </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
