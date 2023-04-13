import React from "react";
import './CSS_Views/Cadastro.css';
import { Link } from "react-router-dom"

//Components
import InputComponent from '../Components/inputComponent'
import BotaoInit from '../Components/botaoInit'
import NavBarLogon from "../Components/navBarLogon";

//Imagens
import Logo from '../Conteudo_Gráfico/Logomarca/LogoWhite.svg'
import Envelope from '../Conteudo_Gráfico/Icones/EnvelopeSimple.svg'
import Key from '../Conteudo_Gráfico/Icones/LockKey.svg'
import User from '../Conteudo_Gráfico/Icones/UserIcon.svg'
import Cpf from '../Conteudo_Gráfico/Icones/IdentificationCard.svg'

//Pagina de cadastro
export default function Cadastro() {
    return(
        <main className='Cadastro'>
            {/* Nav de navegação entre as páginas login e cadastro  */}
            <NavBarLogon></NavBarLogon>
            {/* Texto principal com logo*/}
            <section className="textoPrincipalCadastro">
                <img className="LogoCadastro" src={Logo}></img>
                <h2>Faça seu Cadastro</h2>
            </section>
            {/* Inputs de email, senha, cpf, nome de usuário  */}
            <section className="InputsCadastro">
                <InputComponent nome='Nome de Usuário' type='text' icon={User} />
                <InputComponent nome='CPF' type='number' icon={Cpf} />
                <InputComponent nome='Endereço de e-mail' type='email' icon={Envelope} />
                <InputComponent nome='Senha' type='password' icon={Key} />
                <InputComponent nome='Repita sua Senha' type='password' icon={Key} />
                {/* Termos de privacidade  */}
                <div className="Privacidade">
                    <input type="checkbox" />
                    <span>Li e Aceito todos os <a>termos</a>.</span>
                </div>
            </section>
            {/* Botão de cadastro  */}
            <BotaoInit 
                nome='Cadastrar' 
                link='/Home' 
                colorB='#D9D9D9' 
                colorL='#444444' />
        </main>
    )
}