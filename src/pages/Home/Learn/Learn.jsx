import style from "./index.module.css";
import LearnCard from "./LearnCard/LearnCard";

export default function Learn() {
  return (
    <section className={style.learn}>
      <h1>Learn With Stanrute</h1>
      <div className="center">
        <p>
          Our Academy provide standard learning resources for people to learn
          about the cryptocurrency and blockchain space.
        </p>
      </div>
      <div className={style.cards}>
        <LearnCard text={"Learn the basics of cryptocurrency"} />
        <LearnCard text={"How to Create an NFT"} />
      </div>
      <a href="https://wa.me/2348088261852" className={style.link}>
        Join now
      </a>
    </section>
  );
}
