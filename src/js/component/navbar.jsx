import React from "react";
import { propTypes } from "react-bootstrap/esm/Image"; /*may be able to delete*/
const Navbar = () => {
	return (
	  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<a className="navbar-brand justify-content-start" href="#">
		  Start Bootstrap
		</a>
		<button
		  className="navbar-toggler"
		  type="button"
		  data-bs-toggle="collapse"
		  data-bs-target="#navbarNav"
		  aria-controls="navbarNav"
		  aria-expanded="false"
		  aria-label="Toggle navigation"
		>
		  <span className="navbar-toggler-icon"></span>
    	</button>
    	<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Services</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>
    	</div>
	  </nav>
	);
  };
export default Navbar;