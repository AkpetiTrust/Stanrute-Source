import { React, useState } from "react";
import hands from "./images/hands.png";
import Alert from "../../components/Alert/Alert";

export default function Groove() {
  const [scriptURL, setScriptURL] = useState(
    "https://script.google.com/macros/s/AKfycbwTd0ec4cGfA52DTEr9Gkra_-xdoOKjW38WltmOYJXeHLGYtmKLZ5ZZXLz-x02UpgO2HQ/exec"
  );

  const [alertActive, setAlertActive] = useState(false);

  return (
    <section className="groove">
      <Alert activeProp={alertActive} />
      <h1>Join Our Waitlist</h1>
      <p>Be the first to know when we launch, join the waitlist.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!e.currentTarget.email.value) return;
          fetch(scriptURL, {
            method: "POST",
            body: new FormData(e.currentTarget),
          });

          e.currentTarget.email.value = "";
          setAlertActive(true);
          setTimeout(() => setAlertActive(false), 3000);
        }}
      >
        <input type="email" placeholder="Email Address" name="email" />
        <button className="btn" type="submit">
          Join waitlist
        </button>
      </form>
      <img src={hands} alt="hands" />
    </section>
  );
}
