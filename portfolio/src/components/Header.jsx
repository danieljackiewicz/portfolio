import React from "react";
import { Hello } from "./Hello";
import { Menu } from "./Menu";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <div className="headerWrap">
        <Nav />
        <Hello />
      </div>
    </>
  );
};
