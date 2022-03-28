import React from "react";
import style from "./index.module.css";
import { useLocation } from "react-router-dom";
import logo from "./Stanrute.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, Navigate } from "react-router-dom";

function ArticlePage({ history }) {
  const location = useLocation();
  let item = location.state?.item;
  if (!item) {
    return <Navigate to="/blog" push={true} />;
  }
  return (
    <section className={style.article}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <main className={style.inner}>
        <h1 className={style.title}>{item.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: item.content }}></section>
      </main>
      <Footer />
    </section>
  );
}

export default ArticlePage;
