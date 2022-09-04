import React from "react";
import { experience } from "./ExperienceArray";

export const Experience = () => {
  return (
    <>
      <div className="contentWrap">
        <div className="side sideText">EXPERIENCE</div>
        <div className="content">
          <div className="xxx">
            <div className="content__text" id="experience">
              WORK EXPERIENCE
            </div>
            {/* <div className="content__text">SKILLS</div> */}
          </div>

          <div className="xxx">
            <div className="content__text">
              <div>
                {experience.map((workExp, index) => {
                  return (
                    <div key={index}>
                      <h3>{workExp.title}</h3>
                      <h4>{workExp.company}</h4>
                      <p>{workExp.city}</p>
                      <p>{workExp.period}</p>
                      <ul className="content__text--skill">
                        {workExp.skills.map((skill, index) => {
                          return <li key={index}>{skill}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
