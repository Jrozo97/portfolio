import React from "react";

export const About = () => {
  const title = "<h1>Descubreme</h1>";
  return (
    <>
      <h1 className="title-section">{title}</h1>
      <section className="container-about">
        <div className="ca-image">
          <div className="ca-image-later">
            <div className="ca-image-frontal">
              <img
                className="ca-img-profile"
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/profile.png?alt=media&token=5f4a0d8a-cbb0-4b7f-8df0-22f45b71d6b7"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <diV className="ca-description">
          <h2 className="title-description">Sobre mi</h2>
          <p className="text-description">
            {
                "<p>"
            }
            <br></br>
            Hola a todos, me llamo Jimmy Rozo soy Colombiano, ingeniero de
            sistemas, amante a la tecnología, enfocado en el desarrollo
            frontend, apasionado por aprender sobre las nuevas tecnologías que
            van surgiendo.
            <br></br>
            {
                "</p>"
            }
          </p>
          <button className="btn-cv">
            Descargar CV &nbsp; <i class="fa-solid fa-download"></i>
          </button>
        </diV>
        <div className="ca-hobbies">
          <h2 className="title-description">Pasatiempos</h2>
          <ul className="ca-list">
            <li className="list-hobbies"><i class="fa-solid fa-gamepad"></i> &nbsp; Videojuegos</li>
            <li className="list-hobbies"><i class="fa-solid fa-film"></i> &nbsp; Cine</li>
            <li className="list-hobbies"> <i class="fa-solid fa-headphones"></i> &nbsp; Escuchar musica</li>
            <li className="list-hobbies"><i class="fa-solid fa-book-open-reader"></i> &nbsp; Leer</li>
            <li className="list-hobbies"><i class="fa-solid fa-plane-departure"></i> &nbsp; Viajes inesperados</li>
            <li className="list-hobbies"><i class="fa-solid fa-people-roof"></i> &nbsp; Tiempo en familia</li>
          </ul>
        </div>
      </section>
    </>
  );
};
