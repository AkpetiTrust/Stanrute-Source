import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Academy from "./pages/Academy/Academy"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/academy' exact element={<Academy />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
