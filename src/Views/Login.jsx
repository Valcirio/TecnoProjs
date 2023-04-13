import React from "react";
import './CSS_Views/Login.css';
import {createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom"

//Components
import InputComponent from '../Components/inputComponent'
import BotaoInit from '../Components/botaoInit'
import NavBarLogon from "../Components/navBarLogon";

//Imagens
import Logo from '../Conteudo_Gráfico/Logomarca/LogoWhite.svg'
import Envelope from '../Conteudo_Gráfico/Icones/EnvelopeSimple.svg'
import Key from '../Conteudo_Gráfico/Icones/LockKey.svg'

//Componente da Página de Login
export default function Login() {
    return(
        <main className='Login'>
            {/* Nav de navegação entre as páginas login e cadastro  */}
            <NavBarLogon></NavBarLogon>
            {/* Texto principal com logo*/}
            <section className="textoPrincipalLogin">
                <div className="LogoLogin">
                    <img src={Logo}></img>
                    <p>TecnoJr</p>
                </div>
                <h1>TecnoProjs</h1>
                <h2>Faça seu Login</h2>
            </section>
            {/* Inputs de email e senha  */}
            <section className="InputsLogin">
                <InputComponent nome='Endereço de e-mail' type='email' icon={Envelope} />
                <InputComponent nome='Senha' type='password' icon={Key} />
                <a href=''>Esqueceu a Senha?</a>
            </section>
            {/* Botões de login e cadastro  */}
            <section className="BotoesLogin">
                <BotaoInit 
                    nome='Entrar' 
                    link='/Home' 
                    colorB='#D9D9D9' 
                    colorL='#444444' />

                <BotaoInit 
                    nome='Cadastrar' 
                    link='/Cadastro' 
                    colorB='#444444' 
                    colorL='#D9D9D9' />
            </section>

        </main>
    )
}