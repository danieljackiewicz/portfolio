import React from "react";
import { Skills } from "./Skills";

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
          
          <Skills />
        </div>
        <div className="sideText">DANIEL JACKIEWICZ</div>
      </div>
    </>
  );
};
