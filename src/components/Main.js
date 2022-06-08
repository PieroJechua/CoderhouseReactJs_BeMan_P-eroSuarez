import ItemListContainer from './ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

const Main = ()=>{
    return (
        <main>
            
            <ItemListContainer saludo= "Bienvenido a nuestra tienda amigo"/>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.mahana-monoi.com/513-home_default/pulsera-negra-perla-nacarada.jpg" />
                <Card.Body>
                    <Card.Title>Producto uno</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perferendis possimus.
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </main>
    )
};

export default Main;