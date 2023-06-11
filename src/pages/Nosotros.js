import React from "react";
import "./Nosotros.css";
import repe from "../img/foto.jpg"

class Nosotros extends React.Component{
  
render(){
  return (
    <section class="Nosotros">
    <div class="k">
      <div class="about">
        <h4> SOBRE NOSOTROS </h4>
        <h1> Brindar óptimos servicios de consultoría en Ingeniería, Medio Ambiente, Seguridad y Salud </h1>
        <p class="info"> Durante los 25 años de vida institucional hemos asesorado más de 500 empresas y elaborado más de 3000 estudios preventivos y correctivos para la adecuación de las exigencias normativas ambientales y ocupacionales. </p> 
        <p class="info"> Nuestro sistema integrado y staff de profesionales está constituido por expertos nacionales e internacionales de sólida trayectoria académica y amplia experiencia laboral, esto permite proveer ideas y soluciones innovadoras que en conjunto cumplan con las expectativas de nuestros clientes. </p>
        <button><span>Drop Tables</span></button>
        <div class="circle"></div>
      </div>
    </div>
      <div class="foto">
        <img alt="Foto de los miembros de la empresa" src={repe}></img>
        <div class="circulo"></div>
      </div>
    </section>
  );
}
  
}

export default Nosotros;