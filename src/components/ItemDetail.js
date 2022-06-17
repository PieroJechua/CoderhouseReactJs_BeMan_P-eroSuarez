import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({Product}) => {
    return(
        <div className='detail'>
            <img src={Product.image}alt="Product.name"
            width="400" />
            <div>
                <h4>{Product.name}</h4>
                <p>{Product.descripcion}</p>
                <p>Precio: {Product.precio}</p>
                <ItemCount Stock={10} Initial={0} onAdd ={()=>{}} />
            </div>
        </div>
    );
};

export default ItemDetail;