import "./footer.css";
import logo from "../../images/logo.jpeg";
import {AiOutlineArrowRight} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>

      <div className="footer__border">

        <div className="footer__logo">

          <div className="footer__logo-pic">
            <img
              className="footer__pic"
              src={logo}
              alt="Logo"
            />
          </div>

          <a className="footer__logo-name" href="#home">
            Genere natuS
          </a>

          <p className="copy">© 2022 </p>
          
        </div>

        <ul className="socialMenu">
          <li>
            <a href="https://www.instagram.com/" className="footer__instagram">INSTAGRAM</a>
          </li>
          <li>
            <a href="http://youtube.com/" className="footer__youtube">YOUTUBE</a>
          </li>
          <li>
            <a href="https://twitter.com/" className="footer__twitter">TWITTER</a>
          </li>
        </ul>

        <ul className="menu">
          <li>
            <a href="#Welcome">W</a>
          </li>
          <li>
            <a href="#About">A</a>
          </li>
          <li>
            <a href="#Pricing">P</a>
          </li>
          <li>
            <a href="#Contact">C</a>
          </li>
        </ul>

        <div className="subscription">
          <p class="subscribe">Subscribe to our newsletter</p>
          <input
            type="email"
            name="email"
            id="email"
            className="footer__input"
            placeholder="your@email.com"
            autocomplete="off"
          />
          <AiOutlineArrowRight className="footer__arrow" />
        </div>

      </div>

    </footer>
  );
};

export default Footer;
