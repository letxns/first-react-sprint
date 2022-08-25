
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GridCard from './GridCard';
import "./ProductsSection.css";

const ProductsSection = () => {

    const [req, setReq] = useState([]);
    const [page, setPage] = useState([]);

    useEffect(()=> {
        const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;
        axios 
        .get(url)
        .then((response) => {
            setReq(response.data.products);
            setPage(response.data.nextPage);
        })
        .catch((error) => console.log(error.message));
    }, []);

    function createProduct(url){
        axios
        .get(`${url}`)
        .then((response) => {
            setPage(response.data.nextPage)
            setReq(
                [...req, ...response.data.products]
            )
        })
        .catch((e) => ('Erro na requisição'))
    }
    
    return ( 
        <section className='products-section'>
            <div>
                <h4>Sua seleção especial</h4>
            </div>
            <div className='grid-container'>
                {req.map((card) => {
                        return (
                            <GridCard
                                image={card.image}
                                name={card.name}
                                description={card.description}
                                oldPrice={card.oldPrice}
                                price={card.price}
                                installments={`${card.installments.count}, ${card.installments.value}`}
                            />
                        )
                    })
                }
                <div className='btn'>
                    <button  className="btn-compras" onClick={() => { createProduct(page)}}>Ainda mais produtos aqui!</button>
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;