import React from "react";
import data from "../Components/data";
import estilos from "./Home.module.css";


const Home = () => {
  return (
    <>
    <section className={estilos.contenedor}>
      <img
        src={data.personalData.avatar}
        alt=""
        className={estilos.avatar}
      ></img>
      <div className={estilos.info}>
        <h2>Personal Information:</h2>
        <p>Name: {data.personalData.name}</p>
        <p>Last Name: {data.personalData.lastname}</p>
        <p>Nationality: {data.personalData.nationality}</p>
        <p>Age: {data.personalData.age} years old</p>
      </div>
    </section>
    </>
  );
};

export default Home;
