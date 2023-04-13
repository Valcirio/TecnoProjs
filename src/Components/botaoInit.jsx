import React from "react";
import "./CSS_Comps/botaoInit.css";
import { Link } from "react-router-dom"

//Componente de botão
export default function botaoInit(props){
    //Parametros: Nome do botao, a pagina que ele encaminha e as cores
    const {nome, link, colorB, colorL} = props

    return (
        <Link to={link}><button className='Botao' style={{
            backgroundColor: colorB,
            color:colorL
        }}>{nome}</button></Link>
    )
}