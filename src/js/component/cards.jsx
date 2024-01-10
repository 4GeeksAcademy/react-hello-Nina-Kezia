import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Button } from 'react-bootstrap';

const Card = (props) => {
	return (
        <div className="card">
			<div className="card">
  				<img src={props.img} className="card-img-top" alt="..." width={props.width} height={props.height}/>
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
export default Card;