import React, {useEffect,useState} from 'react';
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    //Creamos un estado que cuambiará cuando se empiecen a jalar los items. La función setItems actualizará los valores del array.
    const [items, setItems] = useState([]);

    //llamaremos a la promesa customfetch
    useEffect(() => {
        customFetch (3000,productos)
        .then(resultado => setItems(resultado))
    }, [items])

    return (
        <>
            <h2> Lista de productos</h2>
            <p> {props.saludo}</p>
            <ItemList products = {items}/>
        </>
    )
};

export default ItemListContainer;