import React from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Repos } from "./components/Repos";

export const Portfolio = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Content />
        <Experience />
        <Repos />
        <Form />
        <Footer />
      </div>
    </>
  );
};
