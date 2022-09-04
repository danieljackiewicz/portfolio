import React from "react";
import { ProgressBar } from "../helpers/ProgressBar";

export const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <h4 className="skills">Skills</h4>
        <ProgressBar skill="HTML" done="88" />
        <ProgressBar skill="CSS" done="80" />
        <ProgressBar skill="JavaScript" done="45" />
        <ProgressBar skill="React" done="50" />
        <ProgressBar skill="TypeScript" done="35" />
        <ProgressBar skill="Wordpress" done="68" />
      </div>
    </>
  );
};
