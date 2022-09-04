import React from "react";

export const ProgressBar = ({ skill, done }) => {
  const [style, setStyle] = React.useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1000);

  return (
    <>
      <div className="skill-name">
        <span className="skill">{skill}</span>
        <span className="skill">{done}%</span>
      </div>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </>
  );
};
