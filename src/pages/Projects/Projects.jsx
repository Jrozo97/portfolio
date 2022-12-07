import React, { useContext } from "react";
import { Card } from "../../components/card/Card";
import GeneralContext from "../../context/GeneralContext";

export const Projects = () => {
  const { projects } = useContext(GeneralContext);

  const title = "<h1>Proyectos</h1>";
  const subtitle = "<h3>Proyectos</h3>";

  return (
    <>
      <h3 className="subtitle-section">{subtitle}</h3>
      &nbsp;
      <h1 className="title-section">{title}</h1>
      <div className="container-projects">
        {projects.map((item, index) => {
          return (
          <Card
            key={index}
            name={item.name}
            image={item.image}
            repository={item.repository}
            deployment={item.deployment}
            tools={item.tools.join(", ")}
          />
          );
        })}
      </div>
    </>
  );
};
