import React from "react";
import "./CSS_Comps/userConnect.css"
import UserIcon from "../Conteudo_Gráfico/Icones/UserIcon.svg"

//Componente que aparece o nome do usuário logado
export default function UserConnect(props){
    return(
        <div className="NameBox">
            <img src={UserIcon} alt="UserConnect" />
            <div>
                <p>{props.user}</p>
            </div>
        </div>

    )
}