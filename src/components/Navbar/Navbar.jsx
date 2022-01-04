import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import { useState } from "react";

export default function Navbar({ children, textColor }) {
  const [active, setActive] = useState(false);

  return (
    <section
      className={`${style.navbar} ${active ? style.active : ""} nav`}
      style={{ color: textColor }}
    >
      {children}
      <span
        aria-hidden
        className={`${style.toggle} ${active ? style.active : ""}`}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      >
        <span></span>
      </span>
      <nav className={active ? style.active : ""}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
