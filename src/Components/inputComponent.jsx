import React from "react";
import './CSS_Comps/inputComponent.css'

//Componente para a criação dos inputs de Cadastro e Login
export default function InputComponent(props){
    //Parametros contendo o nome do input, tipo, e icones que representam
    const {nome, type, icon} = props
    //Verifica o tipo de input, se for number, significa que o componente desejado é para armazenar um CPF, sendo um input type=text, com alguns ajustes
    if(type === 'number'){
        return(
            <section className="caixaInput">
                <span>{nome}:</span>
                <div className="Input">
                    <img src={icon} />
                    <input type='text'
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                    minLength="11" maxLength="14"></input>
                    {/* Aceita CPF e CNPJ, por isso o tamanho minimo e máximo, o pattern te da a opção de colocar os carcteres '-' e '.' se quiser  */}
                </div>
            </section>
        )
    }
    else{
        //Retorna os demais componentes, o parametro type vai para o input type, assim variando os inputs 
        return(
            <section className="caixaInput">
                <span>{nome}:</span>
                <div className="Input">
                    <img src={icon} />
                    <input type={type}></input>
                </div>
            </section>
        )
    }
}