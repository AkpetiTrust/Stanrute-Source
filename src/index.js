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
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import useTimeLeft from "./pages/ComingSoon/hooks/useTimeLeft";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

function Render() {
  const timeLeft = useTimeLeft();
  return timeLeft < 0 ? (
    <ComingSoon />
  ) : (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/academy" exact element={<Academy />} />
        <Route path="/careers" exact element={<Career />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/articlepage" exact element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>,
  document.getElementById("root")
);
