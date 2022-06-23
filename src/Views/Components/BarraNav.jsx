import React from "react";
import { Link } from "react-router-dom"
import estilos from "./BarraNav.module.css"

const BarraNav = () =>{
    return (
        <nav className={estilos.navegacion}>
            <ul className={estilos.lista}>
                <Link to="/" className={estilos.item}><li>Home</li></Link>
                <Link to="/about" className={estilos.item}><li>About</li></Link>
                <Link to="/experience" className={estilos.item}><li>Experience</li></Link>
                <Link to="/bio" className={estilos.item}><li>Bio</li></Link>
            </ul>
        </nav>
    );
}

export default BarraNav;