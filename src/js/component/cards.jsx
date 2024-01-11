import React from "react";
import Button from 'react-bootstrap/Button';

const Card = (props) => {
	return (
        <div className="cooking">
			<div className="card">
  				<img src={props.img} className="card-img-top" alt="..." style={{width: props.width, height:props.height}}/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.text}</p>
						<Button variant="primary" size="sm">
						Find Out More!
						</Button>
					</div>
			</div>
		</div>
	);
};


/*import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
		{props.text}
        </Card.Text>
        <Button variant="primary">Find Out More!</Button>
      </Card.Body>
    </Card>
  );
}*/

export default Card;