import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

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





