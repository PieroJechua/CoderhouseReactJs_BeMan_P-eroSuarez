import React from 'react';
import Item from './Item';

//Aqui se construye la promesa que armará los item.

function ItemList ({products}){
    return (
        <section className="cardProduct">
            {products.map( p =>
                <Item
                id={p.id}
                title={p.title}
                image={p.image}
                price={p.price}
                key={p.id}
                />
            )}
        </section>
    );
};

export default ItemList;