import ItemCount from './ItemCount';
import React, {useEffect,useState} from 'react';
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);


    useEffect(() => {
        customFetch (3000,productos)
        .then(resultado => setItems(resultado))
    }, [items])
    console.log(items)
    
    return (
        <>
            <h2> Lista de productos</h2>
            <p> {props.saludo}</p>            
            <ItemCount Stock={10} Initial={0} onAdd ={()=>{}} />
            <ItemList products = {items}/>
        </>
    )
};

export default ItemListContainer;