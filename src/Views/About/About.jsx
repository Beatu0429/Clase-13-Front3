import React from "react";
import estilos from "../Experience/Experience.module.css"
import data from "../Components/data";

const About = () =>{
    return(
        <>
        <h2 className={estilos.titulo}>Education</h2>
            <ul>
                {data.education.map((item) => (
                    <li key={item.id} className={estilos.movies}>{item.institute}</li>
                ))}
            </ul>
        </>
    )
    
}

export default About;