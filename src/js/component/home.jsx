import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div className="whole-wheat">
		<div className="container">
  			<nav className="navbar navbar-expand-lg bg-body-tertiary">
    		<div className="container-fluid">
    		<a className="navbar-brand" href="#">Navbar</a>
    		</div>
  			</nav>
		</div>

		<div className="jumbotron">
  			<h1 className="display-4">Hello, world!</h1>
  				<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  					<hr className="my-4"/>
 				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  				<p className="lead">
    				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  				</p>
		</div>
		<div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	</div>
	);
};

export default Home;
