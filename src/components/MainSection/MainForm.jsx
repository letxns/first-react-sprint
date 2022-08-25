import React from "react";
import MainForm from "./MainForm.css";
// import Header from "./Header";

const Form = () => {
    return ( 
        <form className='main-form'>
            <div className='main-form_input'>
                <label>Seu nome:</label>
                <input className="main-form_nome" type="text" placeholder="Digite nome"></input>
                <label>E-mail:</label>
                <input className="main-form_email" type="text" placeholder="Digite seu e-mail"></input>
                <label>CPF:</label>
                <input className="main-form_cpf" type="text" placeholder="Digite seu CPF"></input>
            </div>
            <div className="btn-radio_genero">
                <input type="radio"></input>
                <label>Feminino</label>
                <input type="radio"></input>
                <label>Masculino</label>
            </div>
            <button className="btn-send">Enviar</button>
        </form>
    );
}

export default Form;