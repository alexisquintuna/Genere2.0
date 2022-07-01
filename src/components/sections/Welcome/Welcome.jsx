import React from 'react'
import Slider from '../SlideAnimation/Slider';
import "./welcome.css"

const Welcome = () => {
  return (
    <section className="Welcome" id="Welcome">

      <Slider name="WELCOME" className="Slider" />

      <h2>Welcome To The Underground Scene</h2>

      <div className="container welcome__container">

        <p className="welcome__text">
          Its either you've found this page by luck or you have been invited by
          a fellow member. This isn't no ordinary racing club. In this club you
          must already have street credit and be considered elite. This is where
          the elite of elite come to compete and have fun. Nothing but fun, no
          beef, no problems
          <br/>
          just racing.
        </p>
        <iframe
          src="https://www.youtube.com/embed/9FfIdoFf9WE?start=1555"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

      </div>

    </section>
  );
};

export default Welcome;
