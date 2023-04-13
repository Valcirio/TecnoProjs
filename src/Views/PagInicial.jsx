import React from 'react';
import './CSS_Views/PagInicial.css';
import {BrowserRouter as Router} from 'react-router-dom'

//Componentes
import BotaoInit from '../Components/botaoInit'

//Imagens
import Logo from "../Conteudo_Gráfico/Logomarca/LogoWhite.svg"
import Ou from "../Conteudo_Gráfico/Icones/ou.svg"


//Componente da Página inicial
export default function PagInicial() {
  return (
    // Div que engloba toda a página 
    <main className="PagInicial">
        {/* Imagem da logo e texto principal  */}
        <img src={Logo}></img>
            <p className='textoPrincipal'>Ganhe dinheiro 
    indicando projetos
    para a <strong className='nomeInit'>TecnoProjs.</strong></p>
        {/* Botões de cadastro e Login  */}
        <section className='Buttons'>
            <BotaoInit 
            nome='Login' 
            link='/Login' 
            colorB='#D9D9D9' 
            colorL='#444444' />
            {/* Divisória  */}
            <img src={Ou}></img>

            <BotaoInit 
            nome='Cadastro' 
            link='/Cadastro' 
            colorB='#444444' 
            colorL='#D9D9D9' />
        </section>
    </main>
  )
}