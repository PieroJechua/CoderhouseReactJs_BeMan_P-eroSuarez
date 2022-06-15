import {useState} from "react";

const ItemCount = ({Stock, Initial, onAdd}) => {

    //Defines el useState [variable inicial, función(*)]
    const a = Initial;
    const [contador, setContador] = useState(a);

    //Construyes la función(*)
    const aumentarContador = () => {
        console.log ("aumentar contador");
        setContador (contador+1);
    };

    //Puedes construir otra función que reemplace al parametro función(*)
    const disminuirContador = () => {
        if (contador > 0){
            console.log ("disminuir contador");
            setContador (contador-1);
        }
    };

    //Bloque provisional para llevar a cero el contador ... Simula venta ingresada
    const enviarContador = () => {
        if (contador > Stock){
            alert ("No tenemos stock suficiente por favor reduce tu compra")
        }else{
        console.log ("Venta ingresada");
        setContador (contador - contador);
        }
    }
    

    //El bloque que regresas(muestras) en el DOM
    return(
        <>
            <p> El contador va en: {contador} </p>
            <button onClick = {aumentarContador}>Aumentar</button>
            <button onClick = {disminuirContador}>Disminuir</button>
            <button onClick = {enviarContador}> Agregar carrito </button>
        </>
    );
};

export default ItemCount;