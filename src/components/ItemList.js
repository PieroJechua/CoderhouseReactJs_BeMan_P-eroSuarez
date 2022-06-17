import React from 'react';
import Item from './Item';

//Aqui se construye la promesa que armará los item. 

function ItemList ({products}){
    return (
        products.map( p =>
            <Item
            id={p.id}
            name={p.name}
            image={p.image}
            key={p.id}
            />
        )
    );
};

export default ItemList;