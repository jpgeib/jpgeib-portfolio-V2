import React, { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import SingleBlog from "../../pages/SingleBlog";
import Contact from "../../pages/Contact";
import Edit from "../../pages/Edit";
import ForgotPassword from "../../pages/ForgotPassword";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ResetPassword from "../../pages/ResetPassword";
import Portfolio from "../../pages/Portfolio";
import Reviews from "../../pages/Reviews";
import SingleReview from "../../pages/SingleReview";
import Write from "../../pages/Write";

import "./style.css";

const getWindowDimensions = () => {
  const page = document.querySelector("html");
  const { clientWidth: width, clientHeight: height } = page;
  return {
    width,
    height
  }
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    const handlePageLoad = () => {
      setCurrentUrl(window.location.href);
    }
    window.addEventListener("load", handlePageLoad);
    return window.removeEventListener("load", handlePageLoad);
  }, []);

  return currentUrl;
};

const App = () => {

  const { width } = useWindowDimensions();

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<SingleBlog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/forgot" element={<ForgotPassword />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset/:id/:token" element={<ResetPassword />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/review/:id" element={<SingleReview />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;