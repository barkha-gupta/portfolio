import React from "react";
import apic from "../assets/g5.gif";

export default function About_Me() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Developer Based Out Of India
      </p>

      <div className="about-me__body">
        <p>
          As a creative problem solver, I find joy in tackling coding challenges
          head-on and witnessing the meaningful transformation of my creations.
          I thrive on individual tasks and value deep focus, while also
          excelling in effective communication as a collaborative team player.
          Continuous learning and exploring new web technologies and frameworks
          keep me engaged and excited. When I'm not coding, I find solace in the
          pages of a captivating book or take tranquil walks to rejuvenate my
          creativity. Let's come together and bring our ideas to life as a
          dynamic team!
        </p>
        <p>
          <b>FUN FACT :</b> Yes, I do love coffee.
        </p>
      </div>

      <img src={apic} alt="A computer related gif" className="about-me__img" />
    </section>
  );
}
