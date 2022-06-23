import React from "react";
import data from "../Components/data";
import estilos from "./Experience.module.css"

const Experience = () =>{
    return(
        <>
        <h2 className={estilos.titulo}>Experience in movies</h2>
            <ul>
                {data.experience.map((item) => (
                    <li key={item.id} className={estilos.movies}>{item.movie}</li>
                ))}
            </ul>
        </>
    )
    
}

export default Experience;