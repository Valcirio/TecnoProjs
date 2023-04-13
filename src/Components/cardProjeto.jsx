import React from "react";
import "./CSS_Comps/cardProjeto.css"

import analise from "../Conteudo_Gráfico/Icones/estado-1.svg"
import aprovado from "../Conteudo_Gráfico/Icones/estado-1.svg"
import completo from "../Conteudo_Gráfico/Icones/estado.svg"

//Componente do card do projeto que aparece na Home
export default function CardProjeto(props){
    //Parametros, um objeto que contem os dados do Projeto, icone de engrenagem
    const {obj, icon} = props

    //Apresenta três casos relacionados ao estado do projeto, ele define se ainda irá poder editar ou não
    switch(obj.estado){
        //Quando esta em analise, pode editar o projeto
        case "em analise":
            return(
                <section className="CardProjeto">
                    <span>{obj.nome}</span>
                    <div className="infoCard">
                        {/* Icone de estado do projeto  */}
                        <img src={analise} alt="img"></img>
                        {/* Icone de edição  */}
                        <img src={icon} alt="img"></img>
                    </div>
                </section>
            )
        //Quando aprovado, pode acompanhar o progresso
        case "aprovado":
            return(
                <section className="CardProjeto">
                    <span>{obj.nome}</span>
                    <div className="infoCard">
                        {/* Icone de estado do projeto  */}
                        <img src={aprovado} alt="img"></img>
                        {/* Barra de progresso */}
                        <div className="progressBar">
                            <span>Progresso:</span>
                            <input type="range" value={obj.progresso} min="0" max="100" readOnly></input>
                        </div>
                    </div>
                </section>
            )
        //Quando completo, pode retirar o dinheiro
        case "completo":
            return(
                //Engloba a estrutura
                <section className="CardProjeto">
                    {/* Nome do projeto */}
                    <span>{obj.nome}</span>

                    <div className="infoCard">
                        {/* Icone de estado do projeto  */}
                        <img src={completo} alt="img"></img>
                        {/* Barra de progresso */}
                        <div className="progressBar">
                            <span>Progresso:</span>
                            <input type="range" value={obj.progresso} min="0" max="100" readOnly></input>
                        </div>
                    </div>
                </section>
            )
    }

}