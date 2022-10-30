import React from "react";

export const Banner = () => {
  return (
    <section className="banner-container">
      <div className="bc-information">
        <h1 className="bc-title">¡Hola a todos! Soy Jimmy Rozo</h1>
        <p className="bc-subtitle">
          Frontend Developer apasionado por la tecnología y la implementación de
          diseños que inspiren
        </p>
        <button className="bc-btn">Ver mis proyectos</button>
      </div>
      <div className="bc-img-frame">
        <img
          className="bc-img-profile"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/profile.png?alt=media&token=5f4a0d8a-cbb0-4b7f-8df0-22f45b71d6b7"
          alt="logo"
        />
      </div>
    </section>
  );
};
