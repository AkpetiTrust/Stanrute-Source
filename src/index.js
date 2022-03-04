import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Academy from "./pages/Academy/Academy";
import Career from "./pages/Career/Career";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import ScrollToTop from "./ScrollToTop";

import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init({
  once: true,
})


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/academy' exact element={<Academy />} />
        <Route path='/careers' exact element={<Career />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/blog' exact element={<Blog />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
