import { React, useState, useEffect } from "react";
import style from "./career.module.css";
import logo from "./Stanrute.png";
import image from "./no_opening.png";
import { Link } from "react-router-dom";
import Opening from "./Opening/Opening";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Career() {
  const [careers, setCareers] = useState([
    {
      title: "Engineering",
      openings: [
        // { title: "Engineering Manager", remote: true },
        // { title: "Senior Software Engineer", remote: true },
        // { title: "Senior Mobile Engineer", remote: true },
      ],
    },
    { title: "Product", openings: [] },
    { title: "Communication", openings: [] },
    { title: "Marketing", openings: [] },
    { title: "Finances", openings: [] },
  ]);

  const [activeCareer, setActiveCareer] = useState({
    title: "Engineering",
    openings: [
      { title: "Engineering Manager", remote: true },
      { title: "Senior Software Engineer", remote: true },
      { title: "Senior Mobile Engineer", remote: true },
    ],
  });

  useEffect(() => {
    setActiveCareer(careers[0]);
  }, []);

  return (
    <section className={style.career}>
      <Navbar textColor="#00422E">
        <Link to="/" className={style.logo}>
          <img src={logo} alt="Logo" />
        </Link>
      </Navbar>
      <section className={style.hero}>
        <h1>You're a builder?</h1>
        <div className="center">
          <p>
            Our team is building magic for the new financial economy. Join us
            today.
          </p>
        </div>
        <a href="https://wa.me/2348088261852" className="btn">
          Apply
        </a>
      </section>
      <main className={style.main}>
        <h1>Our Current Openings</h1>
        <div className={style.select_group}>
          <button className={`btn ${style.filter}`}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5313 35.4167H17.1876V34.1146C17.1876 33.3984 16.6016 32.8125 15.8855 32.8125H13.2813C12.5652 32.8125 11.9792 33.3984 11.9792 34.1146V35.4167H5.46883C4.75269 35.4167 4.16675 36.0026 4.16675 36.7188V39.3229C4.16675 40.0391 4.75269 40.625 5.46883 40.625H11.9792V41.9271C11.9792 42.6432 12.5652 43.2292 13.2813 43.2292H15.8855C16.6016 43.2292 17.1876 42.6432 17.1876 41.9271V40.625H44.5313C45.2475 40.625 45.8334 40.0391 45.8334 39.3229V36.7188C45.8334 36.0026 45.2475 35.4167 44.5313 35.4167ZM44.5313 22.3958H38.0209V21.0938C38.0209 20.3776 37.435 19.7917 36.7188 19.7917H34.1147C33.3985 19.7917 32.8126 20.3776 32.8126 21.0938V22.3958H5.46883C4.75269 22.3958 4.16675 22.9818 4.16675 23.6979V26.3021C4.16675 27.0182 4.75269 27.6042 5.46883 27.6042H32.8126V28.9063C32.8126 29.6224 33.3985 30.2083 34.1147 30.2083H36.7188C37.435 30.2083 38.0209 29.6224 38.0209 28.9063V27.6042H44.5313C45.2475 27.6042 45.8334 27.0182 45.8334 26.3021V23.6979C45.8334 22.9818 45.2475 22.3958 44.5313 22.3958ZM44.5313 9.37501H27.6043V8.07293C27.6043 7.35678 27.0183 6.77084 26.3022 6.77084H23.698C22.9819 6.77084 22.3959 7.35678 22.3959 8.07293V9.37501H5.46883C4.75269 9.37501 4.16675 9.96095 4.16675 10.6771V13.2813C4.16675 13.9974 4.75269 14.5833 5.46883 14.5833H22.3959V15.8854C22.3959 16.6016 22.9819 17.1875 23.698 17.1875H26.3022C27.0183 17.1875 27.6043 16.6016 27.6043 15.8854V14.5833H44.5313C45.2475 14.5833 45.8334 13.9974 45.8334 13.2813V10.6771C45.8334 9.96095 45.2475 9.37501 44.5313 9.37501Z"
                fill="#00422E"
              />
            </svg>
          </button>

          <select
            name="career"
            onChange={(e) => {
              let newCareer = careers.filter(
                (career) => career.title === e.currentTarget.value
              )[0];
              setActiveCareer(newCareer);
            }}
          >
            {careers.map((career) => (
              <option key={career.title}>{career.title}</option>
            ))}
          </select>
        </div>

        <div className={style.openings}>
          {activeCareer.openings.length ? (
            activeCareer.openings.map((opening) => (
              <Opening
                key={opening.title}
                title={opening.title}
                remote={opening.remote}
              />
            ))
          ) : (
            <div className={style.no_openings}>
              <div className={style.img_container}>
                <img src={image} alt="No opening" />
              </div>
              <p>
                We don't have any opening at this time follow us on our media
                channels for any updates on this.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </section>
  );
}
