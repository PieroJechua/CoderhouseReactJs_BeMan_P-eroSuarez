import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    return (
        <>
            <h2> Lista de productos</h2>
            <p> {props.saludo}</p>
            <ItemCount Stock={10} Initial={0} onAdd ={()=>{}} />
        </>
    )
};

export default ItemListContainer;