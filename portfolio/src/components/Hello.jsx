import React from "react";

export const Hello = () => {
  return (
    <>
      <div className="hello">
        <div className="intro">
          <div className="intro__text">
            <p className="intro__text--hello">
              Hello
              <br />
              World,
            </p>
            <p className="intro__text--name">
              I am Daniel,
              <br />
              Junior Frontend Developer
            </p>
            <br />I did many things, and I was able to be very good at all of
            them at all of them. This time it will be the same or better. <br />
            "Don't be afraid to give up the good to go for the great."
          </div>
          <div className="intro__social">
            <a
              href="https://www.linkedin.com/in/jackiewicz-daniel/"
              target="_blank"
              alt="linkedin"
            >
              <i
                className="fa-brands fa-linkedin fa-flip"
                style={{ "--fa-animation-duration": "3s" }}
              />
            </a>

            <a
              href="https://github.com/danieljackiewicz"
              target="_blank"
              alt="github"
            >
              <i
                className="fa-brands fa-github fa-flip"
                style={{ "--fa-animation-duration": "3s" }}
              />
            </a>

            <a
              href="https://www.instagram.com/do.eat.now"
              target="_blank"
              alt="instagram"
            >
              <i
                className="fa-brands fa-instagram fa-flip"
                style={{ "--fa-animation-duration": "3s" }}
              />
            </a>
          </div>
        </div>
        <div className="sideText">DANIEL JACKIEWICZ</div>
      </div>
    </>
  );
};
