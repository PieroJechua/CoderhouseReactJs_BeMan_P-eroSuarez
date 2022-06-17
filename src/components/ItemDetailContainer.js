import React, {useState,useEffect} from 'react';
import ItemDetail from './ItemDetail'
import traerProducto from '../utils/traerProducto';

const ItemDetailContainer  = () => {
    //Declaramos el estado para un solo producto
    const[Product,setProduct] = useState ({});

    //Declaramos la promesa que nos ayudará a traer la descripción del producto.
    //UseEffect tiene la función(promesa) que puede tener un resultado positivo Then o negativo catch
    useEffect( ()=>{
        traerProducto()
        .then( (res)=>{
            setProduct(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    console.log (Product);
    return  (
        <ItemDetail Product={Product}  />
    );
};

export default ItemDetailContainer;



