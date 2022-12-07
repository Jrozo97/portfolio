export const Card = ({ name, image, repository, deployment, tools }) => {
  return (
    <div className="container-card">
      <div className="card-info">
        <img className="info-image" src={image} alt={name} />
        <div className="layer">
          <h3 className="layer-title">{name}</h3>
          <p className="layer-stack">{tools}</p>
          <div className="buttons-links">
            {repository !== "" && (
              <a
                className="button-github"
                href={repository}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Github &nbsp; <i className="fa-brands fa-github"></i>
              </a>
            )}

            {deployment !== "" && (
              <a
                className="button-deploy"
                href={deployment}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                View &nbsp; <i className="fa-solid fa-globe"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
