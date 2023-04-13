import React, {useState} from "react";
import './CSS_Comps/inputAdd.css'

//Componente que adiciona inputs para o Título ou a descrição do projeto 
export default function InputAdd(props){
    //Parametro para verificar se quer um input para o título do projeto ou a descrição dele
    const nome = props.nome
    const [data, setData] = useState('')
    function recebeData(data){
        console.log(data)
    }
    // Condição para verificar o tipo de input desejado 
    if(nome==='Título'){
        // Retorna um componente para o título do projeto usando input
        return(
            <section className="caixaInputAdd">
                <span>{nome}:</span>
                {/* O style é usado para aumentar a altura do input */}
                <div className="InputAdd" style={{height: '29px'}}>
                    <input type='text'  placeholder='Ex: Área da Saúde'></input>
                </div>
            </section>
        )
    }
    else{
        // Retorna um componente para a descrição do projeto, usando textarea
        return(
            <section className="caixaInputAdd">
                <span>{nome}:</span>
                {/* O style é usado para aumentar a altura do textarea */}
                <div className="InputAdd" style={{height: '150px'}}>
                    <textarea type='text'  placeholder='Ex : Site com suporte a visualizacao de perfis , serviços e agendamento.' ></textarea>
                </div>
            </section>
        )
    }
}