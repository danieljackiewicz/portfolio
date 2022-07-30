import React from "react";
import { Link } from "react-scroll";

export const Nav = () => {
  return (
    <>
      <div className="nav" id="home">
        <div className="photo">
          <img className="photo__img" src="/img/profil.jpg" />
        </div>
        <ul className="links">
          <Link
            className="link"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="link"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="link"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            className="link"
            to="form"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </>
  );
};
