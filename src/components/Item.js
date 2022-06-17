import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

//Construcción de la tarjeta que se visualizará en la web luego de unos segundos. Se obtendrá a partir de una promesa
//En esta ocasión se opto por construirlo como una función usual en lugar de una función flecha, esto por nada en especial. 
//Se siguen estilos de bootstrap para "card"

function Item ({id, name, image}){
    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, perferendis possimus.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Item;





