import React from "react";
import { Card } from "../../components/card/Card";

export const Projects = () => {
  const title = "<h1>Proyectos</h1>";
  const subtitle = "<h3>Proyectos</h3>";

  return (
    <>
      <h3 className="subtitle-section">{subtitle}</h3>
      &nbsp;
      <h1 className="title-section">{title}</h1>
      <div className="container-carousel">
        <Card />
      </div>
    </>
  );
};
