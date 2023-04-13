import React from "react";
import "./CSS_Comps/footer.css"
import { Link } from "react-router-dom"

//Imagens
import SingOut from "../Conteudo_Gráfico/Icones/SignOut.svg"
import PlusCircle from "../Conteudo_Gráfico/Icones/PlusCircle.svg"
import NotePad from "../Conteudo_Gráfico/Icones/Notepad.svg"

//Componente que fica na parte inferior ao estar logado
export default function Footer(){
    return(
        <footer className="Footer">
            <ul>
                {/* Ícone de Logout com link para a pagina de Login */}
                <Link to="/Login"><li className="iconFooter"><img src={SingOut} alt="SingOut" /></li></Link>
                {/* Separa os Ícones */}
                <hr className="lineBar"></hr>
                {/* Ícone de Create com link para a pagina de Envio de novos projetos */}
                <Link to="/AddProj"><li className="iconFooter"><img src={PlusCircle} alt="PlusCircle" /></li></Link>

                <hr className="lineBar"></hr>
                {/* Ícone de Home com link para a pagina principal */}
                <Link to="/Home"><li className="iconFooter"><img src={NotePad} alt="NotePad" /></li></Link>
            </ul>
        </footer>
    )
}