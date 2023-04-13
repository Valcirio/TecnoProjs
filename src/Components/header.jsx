import React from "react";
import "./CSS_Comps/header.css"

//Componentes
import UserConnect from "./userConnect";

//Imagens
import LogoBlack from "../Conteudo_Gráfico/Logomarca/LogoBlack.svg"

//Componente que se encontra no canto superior da tela
export default function Header(){
    return(
        <nav className="Header">
            <ul className="navBox">
                {/* Logo da TecnoJr  */}
                <li><img src={LogoBlack}></img></li>
                {/* Componente UserConnect  */}
                <li><UserConnect user="Olá, Valcirio"></UserConnect></li>
            </ul>
        </nav>
    )
}