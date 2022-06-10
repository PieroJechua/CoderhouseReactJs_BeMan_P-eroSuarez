import CartWidget from './CartWidget';


const NavBar = (props) => {

    if(props.inheader){
        return (
            <nav>
                <a href="###">Home</a>
                <a href="###">Productos</a>
                <a href="###">Contactanos</a>
                <a href="###">Preguntras Frecuentes</a>
                <CartWidget/>
            </nav>
        );
    }else{
        return (
            <nav>
                <a href="###">Facebook</a>
                <a href="###">Linkedin</a>
                <a href="###">Instagram</a>
            </nav>
        );
    }
}

export default NavBar;