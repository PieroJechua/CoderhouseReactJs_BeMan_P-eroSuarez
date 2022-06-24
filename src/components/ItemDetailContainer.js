import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer  = () => {
    //Declaramos el estado para un solo producto
    const[Product,setProduct] = useState ({});

    const id = useParams ()
    const idproducto = (parseInt(id.id))

    useEffect( ()=>{
        fetch(`https://fakestoreapi.com/products/${idproducto}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, [])

    return  (
        <ItemDetail Product={Product}  />
    );
};

export default ItemDetailContainer;



