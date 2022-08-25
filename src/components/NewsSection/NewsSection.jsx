import React from "react";
import "./NewsSection.css"

const NewsSection = () => {
    return ( 
        <section className='news-section'>
            <h2 className='news-section_titulo'>Compartilhe a novidade</h2>
            <h4>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h4>
            <form className='news-section_form'>
                <div className='news-section-nome'>
                    <label>Nome do seu amigo: </label>
                    <input className="news-section-nome_input" type="text" placeholder="Digite nome"></input>
                </div>
                <div className='news-section-email'>
                    <label>E-mail: </label>
                    <input className="news-section-email_input" type="text" placeholder="Digite seu e-mail"></input>
                </div>    
            </form>    
            <button className="btn-news">Enviar agora</button>
        </section>
    );
}

export default NewsSection;