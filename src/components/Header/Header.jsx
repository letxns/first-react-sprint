import React from "react";
import "./header.css";

const Header = () => {
    return ( 
        <div className='header'>
            <section>
                <h4 className="header-selecao">uma seleção de produtos</h4>
                <h3 className="header-especial">especial para você</h3>
                <h6 className="header-todos">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h6>
            </section>
            <section className="btn-header">
                <button className="btn-header_item">Conheça a Linx</button>
                <button className="btn-header_item">Ajude o algoritmo</button>
                <button className="btn-header_item">Seus produtos</button>
                <button className="btn-header_item">Compartilhe</button>
            </section>
        </div>
    );
}

export default Header;