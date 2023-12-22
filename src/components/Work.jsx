import React from "react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.png";
import p5 from "../assets/project5.png";
import p6 from "../assets/project6.png";

export default function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">
        <a
          href="https://crown-clothings-store.netlify.app/"
          className="portfolio__item"
        >
          <img src={p6} alt="" className="portfolio__img" />
        </a>
        <a
          href="https://tenzies-roll-it.netlify.app/"
          className="portfolio__item"
        >
          <img src={p1} alt="" className="portfolio__img" />
        </a>

        <a
          href="https://contacts-manager-fullstack.netlify.app/"
          className="portfolio__item"
        >
          <img src={p2} alt="" className="portfolio__img" />
        </a>

        <a
          href="https://laundry-cart-react.netlify.app/"
          className="portfolio__item"
        >
          <img src={p3} alt="" className="portfolio__img" />
        </a>

        <a
          href="https://photo-sharing-app.onrender.com/"
          className="portfolio__item"
        >
          <img src={p5} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}
