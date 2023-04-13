import React from "react"
import "./CSS_Comps/navBarLogon.css"
import { Link } from "react-router-dom"

//Componente que fica no canto superior das paginas de Login e Cadastro
export default function NavBarLogon(){
    return(
        <nav className="navBar">
            <ul>
                <Link className="linkNav" to="/Login"><li><p>Login</p></li></Link>
                <Link className="linkNav" to="/Cadastro"><li><p>Cadastro</p></li></Link>
            </ul>
        </nav>        
    )
}