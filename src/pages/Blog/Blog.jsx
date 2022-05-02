import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./blog.module.css";
import logo from "./Stanrute.png";
import blog_cover from "./blog_cover.png";
import investment from "./investment.png";
import Article from "./Article/Article";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Blog() {
  const [recents, setRecents] = useState([]);
  const [popular_posts, setPopular_posts] = useState([]);

  const feedUrl = "https://medium.com/feed/@stanrutelimited";
  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(`https://stanrute-blog.herokuapp.com/${feedUrl}`, options)
      .then((res) => res.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((dom) => {
        let domItems = dom.querySelectorAll("item");
        let result = { items: [] };
        domItems.forEach((item) => {
          let title = item.querySelector("title").textContent;
          let pubDate = item.querySelector("pubDate").textContent;
          let content = item
            .getElementsByTagNameNS("*", "encoded")
            .item(0).textContent;

          // Magic numbers to get thumbnail
          let thumbnail = content.slice(
            content.indexOf("src=") + 5,
            content.indexOf("png") + 3
          );

          result.items.push({
            title,
            pubDate,
            content,
            thumbnail,
          });
        });
        let items = [];
        result.items.forEach((item) => {
          const dateObject = new Date(item.pubDate);
          let date = `${dateObject.getDate()} ${dateObject.toLocaleString(
            "default",
            { month: "long" }
          )}`;

          let minutes = Math.ceil(item.content.split(" ").length / 256);

          items.push({
            title: item.title,
            date: date,
            time: `${minutes} ${minutes !== 1 ? "Mins" : "Min"} Read`,
            link: `/articlepage`,
            image: item.thumbnail,
            subtitle: "",
            index: 0,
            content: item.content,
          });
        });

        setRecents(items);
        setPopular_posts(items);
      });
  }, []);

  return (
    <section className={style.blog}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <main>
        <h1 className={style.title}>
          Learn Everything Blockchain, Crypto &amp; Web3
        </h1>
        <p className={style.subtitle}>
          We share updates, trading tips and community information in our blog -
          Our articles ranges from information about Web 3.0, DeFi, Awesome
          crypto projects etc.
        </p>
        <section className={style.recent_releases}>
          <p className={style.section_heading}>RECENT RELEASE</p>
          <div className={style.inner}>
            {recents.map((recent) => (
              <Article
                title={recent.title}
                key={recent.title}
                subtitle={recent.subtitle}
                time={recent.time}
                date={recent.date}
                link={recent.link}
                image={recent.image}
                item={recent}
              />
            ))}{" "}
            {!recents.length && <Loading />}
          </div>
        </section>
        <section className={style.popular}>
          <p className={style.section_heading}>POPULAR</p>
          <div className={style.inner}>
            {popular_posts.map((post) => (
              <Article
                title={post.title}
                key={post.title}
                subtitle={post.subtitle}
                time={post.time}
                date={post.date}
                link={post.link}
                image={post.image}
                item={post}
              />
            ))}{" "}
            {!popular_posts.length && <Loading />}
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Blog;
