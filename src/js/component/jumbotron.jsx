import React from "react";
import { propTypes } from "react-bootstrap/esm/Image"; /*may be able to delete*/
const Jumbotron = (props) => {
	return (
	 	<div className="jumbotron p-3 text-dark">
       <h1 className="display-4">A Warm Welcome!</h1>
       <p className="lead">
         Peruse our selection of delectable recipes. You will find a complete break down of our recipe selection, just click the button. You know you want to!
       </p>
       {/* <hr className="my-4" /> */}
       <p className="lead">
         <a className="btn btn-primary btn-lg" href="#" role="button">Learn more
         </a>
       </p>
     </div>
	);

};
export default Jumbotron;