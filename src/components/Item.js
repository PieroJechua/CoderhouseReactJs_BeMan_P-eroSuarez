import React from 'react';
import {Link} from 'react-router-dom'

//Construcción de la tarjeta que se visualizará en la web luego de unos segundos. Se obtendrá a partir de una promesa
//En esta ocasión se opto por construirlo como una función usual en lugar de una función flecha, esto por nada en especial.
//Se siguen estilos de bootstrap para "card"

function Item ({id,title,image,price}){
    return (
        <article key={id} className="producto">
            <img src={image} alt={title} />
            <div className="producto-detalle">
                <h4>{title}</h4>
                <p>Precio: ${price} </p>
                <Link to={`/detalle/${id}`}>Ver detalle</Link>
            </div>
        </article>
    );
};

export default Item;





