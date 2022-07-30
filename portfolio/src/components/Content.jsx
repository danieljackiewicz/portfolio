import React from "react";

export const Content = () => {
  return (
    <>
      <div className="contentWrap">
        <div className="side sideText">ABOUT ME</div>
        <div className="content">
          <p className="content__text">
            <i className="fa-solid fa-chart-line"></i>&nbsp; I have highly
            developed analytical and negotiating skills. New things and
            challenges awake in me a great motivation to act.
            <br />
            <i class="fa-solid fa-handshake"></i>&nbsp; In my sales career, I am
            guided by the principles that build lasting relationships with the
            client. Such action always allows me to be successful in this field.
          </p>
          <p className="content__text">
            Privately, I am interested in:
            <br />
            <i className="fa-solid fa-plane-departure"></i>&nbsp; Traveling - my
            greatest achievement so far has been a trip around the world.
            <br />
            <br />
            <i className="fa-solid fa-utensils"></i>&nbsp; Culinary - I love to
            cook, taste, try new things - my blog:
            <a
              className="instaText"
              href="https://www.instagram.com/do.eat.now"
            >
              @do.eat.now
            </a>
            <br />
            <br />
            <i className="fa-solid fa-motorcycle"></i>&nbsp; Motorcycles - I
            drive the Bandit 650s.
            <br />
            <br />
            <i className="fa-solid fa-mountain-sun"></i>&nbsp; Mountains are
            also my passion. I am conquering the Crown of the Polish Mountains.
            By 10.2022 I will finish climbing the remaining 12 of the 28 KGP
            peaks.
          </p>
        </div>
      </div>
    </>
  );
};
