import React from "react";
import "./contact.css";
import Slider from "../SlideAnimation/Slider";

const Contact = () => {
  return (
    <section id="Contact">

      <Slider name="CONTACT" />

      <div className="container contact__container">

        <div className="contact__box">


              <div className="contact__text">
                <h3 className="contact__maintext">Want to join ?</h3>
                <p>
                  Enter the following information and will be in contact
                  shortly.
                </p>
                <p>
                  (Just got to make{" "}
                  <span className="contact__leftside-text">
                    sure you aint with the law you know
                  </span>
                  )
                </p>
                <p className="contact__overlay-text">A thorough background check</p>
              </div>

          <form autocomplete="off" action="" method="POST">

            <div className="contact__middlesection">
                <div className="contact__leftside contact__middle-content">
                    <input type="text" id="name" name="name" placeholder="Enter Street Name" autocomplete="off"/>
                    <br />
                    <input type="email" id="email" name="email" placeholder="Enter Email Address" autocomplete="off"/>
                </div>

                <div className="contact__rightside contact__middle-content">
                    <input type="text" id="facebook" name="facebook" placeholder="Facebook" />
                    <br />
                    <input type="text" id="instagram" name="instagram" placeholder="Instagram" />
                    <br />
                    <input type="text" id="youtube" name="youtube" placeholder="Youtube" />
                    <br />
                    <input type="text" id="twitter" name="twitter" placeholder="Twitter" />
                </div>
            </div>

          </form>

            <button className="contact__button">Let's Race</button>

        </div>

      </div>

    </section>
  );
};

export default Contact;
