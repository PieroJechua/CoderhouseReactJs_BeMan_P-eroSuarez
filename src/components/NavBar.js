import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    if(props.inheader){
        return (
            <nav className='menu-header'>
                <div>
                    <Link to="/"><h1>BeMan</h1></Link>
                    <Link to="/">Home</Link>
                    <Link to="/categoria/jewelery">jewelery</Link>
                    <Link to="/categoria/electronics">electronics</Link>
                    <Link to="/categoria/clothing">clothing</Link>

                    <CartWidget/>
                </div>
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