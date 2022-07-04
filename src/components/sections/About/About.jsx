import "./about.css";
// import Right from "../../images/CarMeets2.jpeg";
// import Center from "../../images/CarMeets3.jpeg";
// import Left from "../../images/CarMeets4.jpeg";
import Slider from "../SlideAnimation/Slider";

// const data = [
//   {
//     id: 1,
//     image: Left,
//     title: "LOVE",
//   },
//   {
//     id: 2,
//     image: Center,
//     title: "RACE",
//   },
//   {
//     id: 3,
//     image: Right,
//     title: "CARS",
//   },
// ];

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
        Being from New York City, one of our founders got introduced to the underground
        car culture there and fell in love with it. He saw many different types
        of vehicles here. From show cars to race cars to drift cars, there was
        something for everyone. Within an hour, a police raid is common at these
        small shows. As a result, he wondered if such events could still be
        organized, but more discreetly, to avoid police detection. It was at
        this point that Genere Natus was born. 
        <br />
        Founded by members from all over the world, we're a car club that celebrates cars, community, and competitiveness.
      </p>
      <br />
      <br />
    </section>
  );
};

export default About;
