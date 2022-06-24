import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    //Creamos un estado que cuambiará cuando se empiecen a jalar los items. La función setItems actualizará los valores del array.
    const [items, setItems] = useState([]);
    const resultado = useParams ()

    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((respuesta) => {
            const p = respuesta.json()
            return p
        })
        .then((items)=>{
            setItems(items)
        })
        .catch((error) => {
            console.log("Hubo un error")
        })
    }, [])

    return (
        <section className='slogan'>
            <p> {props.slogan}</p>
            <ItemList products = {items}/>
        </section>
    )
};

export default ItemListContainer;