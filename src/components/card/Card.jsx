import { useContext } from "react";
import GeneralContext from "../../context/GeneralContext";

export const Card = () => {
  const { projects } = useContext(GeneralContext);

  const tools = projects[0].tools;
  const toolsString = tools.join(", ");

  return (
    <div className="container-card">
      <div className="card-info">
        <img
          className="info-image"
          src={projects[0].image}
          alt={projects[0].name}
        />
        <div className="layer">
          <h3 className="layer-title">{projects[0].name}</h3>
          <p className="layer-stack">{toolsString}</p>
          <div className="buttons-links">
            <a
              className="button-github"
              href={projects[0].repository}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github &nbsp; <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="button-deploy"
              href={projects[0].deployment}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              View &nbsp; <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
