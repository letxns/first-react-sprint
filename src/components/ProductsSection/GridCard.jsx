import React from "react";
import "./gridCard.css"

const GridCard = (props) => {
    return (
        <section className="card">
            <img className="card-image" src={props.image} />
            <div className="card-text">
                <h4 className="card-name">{props.name}</h4>
                <p>{props.description}</p>
                <p>{props.oldPrice}</p>
                <p className="price-now">{props.price}</p>
                <p>{props.installments.count}</p>
                <p>{props.installments.value}</p>
                <button className="btn-compras">Comprar</button>
            </div>
        </section>
    );
}

export default GridCard
