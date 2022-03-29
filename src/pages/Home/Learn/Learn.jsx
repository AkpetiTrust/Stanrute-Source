import style from "./index.module.css";
import LearnCard from "./LearnCard/LearnCard";
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <section className={style.learn}>
      <h1>Learn With Stanrute</h1>
      <div className="center">
        <p>
          Our Academy provides standard learning resources for people to learn
          about the cryptocurrency and blockchain space.
        </p>
      </div>
      <div className={style.cards}>
        <LearnCard text={"Learn the basics of cryptocurrency"} />
        <LearnCard text={"How to Create an NFT"} />
      </div>
      <Link to="academy" className={style.link}>
        Join now
      </Link>
    </section>
  );
}
