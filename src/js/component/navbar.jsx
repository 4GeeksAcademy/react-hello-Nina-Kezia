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
		<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
		  <ul className="navbar-nav">
			<li className="nav-item active">
			  <a className="nav-link" href="https://www.linkedin.com/in/nina-forlini/">
				<i className="fa-brands fa-linkedin-in" style={{ color: '#ad88b0' }}></i>
				<span className="sr-only">(current)</span>
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="https://github.com/NForlini">
				<i className="fa-brands fa-github" style={{ color: '#ad88b0' }}></i>
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="https://4geeksacademy.slack.com/team/U0601SMKGV9">
				<i className="fa-brands fa-slack" style={{ color: '#ad88b0' }}></i>
			  </a>
			</li>
			<li className="nav-item">
			  <a
				className="nav-link"
				href="mailto:ninaforlini1@gmail.com"
				tabIndex="-1"
				aria-disabled="true"
			  >
				<i className="fa-brands fa-google" style={{ color: '#ad88b0' }}></i>
			  </a>
			</li>
		  </ul>
		</div>
	  </nav>
	);
  };
export default Navbar;