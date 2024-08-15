import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'; // Correctly import BrowserRouter
import toast, { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
    <App />
    <Toaster></Toaster>
  </BrowserRouter>
);
