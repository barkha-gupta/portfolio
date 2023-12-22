import React from 'react';
import profilepic from "../assets/pic2.jpg";

export default function Introduction() {
  return (
    <section className="intro" id="home">
            <img src={profilepic} alt="a picture of barkha gupta" />
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Barkha Gupta</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">full stack developer</p>
        </section>
  )
}
