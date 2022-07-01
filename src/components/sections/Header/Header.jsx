import React from "react";
import "./header.css";
import NSX from "../../images/NSX.png";
import logo from "../../images/logo.jpeg";
import Socials from "./HeaderSocials";
// import Background from "./Background";

const Header = () => {
  return (
    <header>
      {/* <Background /> */}
      <div className="HeaderTop">

        <div className="Logo">

          <div className="Logopic">
            <img src={logo} alt="Logo" />
          </div>

          <a href="#" className="LogoName" >
            <strong>Genere natuS</strong>
          </a>

        </div>

        <Socials className="social" />

      </div>

      <div className="container header__container">

        <div className="middleSection">
          <h1 className="maintitle ">Welcome to</h1>
          <br />

          <div className="titleName">
            <span className="back title">
              <h3>Genere Natus</h3>
            </span>
            <span className="middle title">
              <h3>Genere Natus</h3>
            </span>
            <span className="front title">
              <h3>Genere Natus</h3>
            </span>
            <p className="header__description">
              We are here for one thing and one thing only to have fun and wild
              out.
            </p>
          </div>

          {/* PICTURE IN THE MIDDLE  */}

          <div className="HomeImg">
            {/* <img src={RX} alt="RX-7" className="rxImg" /> */}
            <img src={NSX} alt="NSX Car" className="nsxImg" />
          </div>
          
        </div>


      </div>
    </header>
  );
};

export default Header;
