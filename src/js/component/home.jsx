import React from "react";
import Card from "./cards";
import Footer from "./footer";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
	<div className="whole-wheat">
		<Navbar/>
		<Jumbotron/>
		<div className="d-flex">
			<Card title ={"food"}/>
			<Card title ={"food2"}/>
			<Card title ={"food3"}/>
			<Card title ={"food4"}/>
		</div>
		<Footer/>
	</div>
	);

};
export default Home;