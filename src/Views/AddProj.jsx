import React from "react";
import './CSS_Views/AddProj.css'

//Componentes
import Footer from "../Components/footer";
import Header from "../Components/header";
import InputAdd from "../Components/inputAdd";
import InputComponent from "../Components/inputComponent"
import BotaoInit from "../Components/botaoInit"

//Imagens
import Cpf from "../Conteudo_Gráfico/Icones/IdentificationCard.svg"
import User from "../Conteudo_Gráfico/Icones/UserIcon.svg"

//Pagina de Criação de projetos
export default function AddProj(){
    return(
        <main className="AddProj">
            {/* Header com Logo e o usuário logado  */}
            <Header></Header>

            {/* Inputs de titulo, descrição, nome do cliente, cpf do cliente  */}
            <section className="conteudoPrincipal">
                <InputAdd nome='Título'></InputAdd>
                <InputAdd nome='Descrição'></InputAdd>
                <InputComponent nome='Nome do Cliente' type='text' icon={User} />
                <InputComponent nome='CPF do Cliente' type='number' icon={Cpf} />
            </section>
            {/* Botão de publicar  */}
                <BotaoInit 
                        nome='Publicar' 
                        link='/Home' 
                        colorB='#D9D9D9' 
                        colorL='#444444' />
            {/* Footer com direcionamento para outras páginas */}
            <Footer></Footer>
        </main>
    )
}