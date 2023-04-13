import React from "react";
import "./CSS_Views/Home.css"

//Componentes
import Footer from "../Components/footer";
import Header from "../Components/header";
import CardProjeto from "../Components/cardProjeto";

//Imagens
import Gear from "../Conteudo_Gráfico/Icones/Gear.svg"

//Projetos dentro de uma lista
let projetos = [
{
    id:0,
    nome:"Aplicativo de Banco",
    description:"",
    estado:'em analise',
    progresso:0
},
{
    id:1,
    nome:"Delivery de rodízio",
    description:"",
    estado:'aprovado',
    progresso:45
},
{
    id:2,
    nome:"Site de namoro virtual",
    description:"",
    estado:'completo',
    progresso:100
}
]

//Pagina principal, onde apresenta os projetos, e seus estados
export default function Home(){
    return(
        <main className="Home">
            <Header></Header>
            <div className="containerCards">
            {/* Mapeia todos os projetos dentro da lista, e cria um componente para cada um deles */}
            {projetos.map((obj)=>{
                return <CardProjeto obj={obj} icon={Gear}></CardProjeto>
            })
            }
            </div>
            <Footer></Footer>
        </main>
    )
}