import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import ScrollToTop from "./components/ScrollToTop";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </HelmetProvider>
);

reportWebVitals();
