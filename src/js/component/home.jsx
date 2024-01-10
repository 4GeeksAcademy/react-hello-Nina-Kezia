import React from "react";
import Card from "./cards";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
	<div className="whole-wheat">
		<div class="container">
  			<nav class="navbar navbar-expand-lg bg-body-tertiary">
    		<div class="container-fluid">
    		<a class="navbar-brand" href="#">Navbar</a>
    		</div>
  			</nav>
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