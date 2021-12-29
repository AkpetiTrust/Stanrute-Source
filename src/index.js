import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
