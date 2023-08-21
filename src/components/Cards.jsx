import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image}  />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="dark">Mi información</Button>      </Card.Body>
        <Tags texto={props.texto} color= {props.color}/>
    </Card>
  );
}

export default Cards;