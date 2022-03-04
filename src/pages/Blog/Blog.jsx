import { React, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./blog.module.css";
import logo from "./Stanrute.png";
import blog_cover from "./blog_cover.png";
import investment from "./investment.png";
import Article from "./Article/Article";
import { Link } from "react-router-dom";

function Blog() {
  const [recents, setRecents] = useState([
    {
      title: "Top Assets for 2022 - with Good base technologies",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: blog_cover,
      subtitle: "",
      index: 0,
    },
    {
      title: "Top Assets for 2022 - with Good base technologies",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: blog_cover,
      subtitle: "",
      index: 1,
    },
    {
      title: "Top Assets for 2022 - with Good base technologies",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: blog_cover,
      subtitle: "",
      index: 2,
    },
  ]);
  const [popular_posts, setPopular_posts] = useState([
    {
      title: "Crypto Investments vs Traditional Investments ",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: investment,
      subtitle: "Which has proven to be more profitable?",
      index: 0,
    },
    {
      title: "Crypto Investments vs Traditional Investments ",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: investment,
      subtitle: "Which has proven to be more profitable?",
      index: 1,
    },
    {
      title: "Crypto Investments vs Traditional Investments ",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: investment,
      subtitle: "Which has proven to be more profitable?",
      index: 2,
    },
    {
      title: "Crypto Investments vs Traditional Investments ",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: investment,
      subtitle: "Which has proven to be more profitable?",
      index: 3,
    },
    {
      title: "Crypto Investments vs Traditional Investments ",
      date: "22 February",
      time: "3 Mins Read",
      link: "#",
      image: investment,
      subtitle: "Which has proven to be more profitable?",
      index: 4,
    },
  ]);

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
                key={recent.index}
                subtitle={recent.subtitle}
                time={recent.time}
                date={recent.date}
                link={recent.link}
                image={recent.image}
              />
            ))}
          </div>
        </section>
        <section className={style.popular}>
          <p className={style.section_heading}>POPULAR</p>
          <div className={style.inner}>
            {popular_posts.map((post) => (
              <Article
                title={post.title}
                key={post.index}
                subtitle={post.subtitle}
                time={post.time}
                date={post.date}
                link={post.link}
                image={post.image}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </section>
  );
}

export default Blog;
