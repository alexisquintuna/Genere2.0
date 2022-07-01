import "./about.css";
import Right from "../../images/CarMeets2.jpeg";
import Center from "../../images/CarMeets3.jpeg";
import Left from "../../images/CarMeets4.jpeg";
import Slider from "../SlideAnimation/Slider";

const data = [
  {
    id: 1,
    image: Left,
    title: "LOVE",
  },
  {
    id: 2,
    image: Center,
    title: "RACE",
  },
  {
    id: 3,
    image: Right,
    title: "CARS",
  },
];

const About = () => {
  return (
    <section className="About" id="About">
      <Slider name="ABOUT" />

      <h2>We Do Things Different</h2>

      <div class="container about__container">
        <article class="about__item">
          <div class="about__image">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa050120fea-korea-6-1589902106.jpg?resize=980:*"
              className="about__images"
              alt="love"
            />

            <div class="image__text">
              <p class="love__image-text love__color about__text">LOVE</p>
              <p class="love__image-text about__text">LOVE</p>
            </div>
          </div>
        </article>

        <article class="about__item">
          <div class="about__image">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa050120fea-korea-5-1589902077.jpg?resize=980:*"
              className="about__images"
              alt="race"
            />

            <div class="image__text">
              <p class="race__image-text race__color about__text">RACE</p>
              <p class="race__image-text race__white about__text">RACE</p>
            </div>
          </div>
        </article>

        <article class="about__item">
          <div class="about__image">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/roa050120fea-korea-16-1589902037.jpg?crop=1.00xw:0.849xh;0,0.0839xh&resize=1600:*"
              className="about__images"
              alt="cars"
            />

            <div class="image__text">
              <p class="cars__image-text cars__color about__text">CARS</p>
              <p class="cars__image-text about__text">CARS</p>
            </div>
          </div>
        </article>
      </div>

      <br />
      <br />
      <br />
      <br />
      <p>
        Genere Natus was created back when our founder was in Chicago and was
        introduced into the underground scene of cars. Here he saw a variety of
        cars. Starting from show cars to race cars to drift cars. He saw it all
        and was amazed, but everytime the group went out to show of the cars
        it'll always be shut down by cops. This made him think what if there was
        a way to still organize such events but in a more disclose area. This is
        when Genere Natus was created. A car club where theres nothing but
        love for each other and cars, with a little competion.
      </p>
      <br />
      <br />


    </section>
  );
};

export default About;
