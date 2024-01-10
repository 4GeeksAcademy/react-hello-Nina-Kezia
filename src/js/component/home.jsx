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
        <div className="d-flex card">
            <Card title ={"Global cooking at home"} img = {"https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine-1024x576.jpg"} height={325} width = {500} text = {"Find your passion at home!"}/>
            <Card title ={"Spices"} img = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxu4CUdUMeYb29kWllHjig0WF5x1Fqr9waziol3-FInQ9U_TaDJMfcSUKMIiVNahFBy0&usqp=CAU"} height={325} width = {500} text = {"Learn to season properly"}/>
            <Card title ={"Steak au Poivre"} img = {"https://cdn.britannica.com/14/226814-050-F3672D53/Wagyu-beef-ribeye-steak-grilled.jpg"} height={325} width = {500} text = {"The classic French dish"}/>
            <Card title ={"New recipes"} img = {"https://welovefire.com/wp-content/uploads/2022/07/Cuisine-du-monde-_-Essayez-de-nouvelles-recettes-cet-ete%E2%80%89-copy-scaled.jpg"} height={325} width = {500} text = {"New recipes and techniques to learn"}/>
        </div>
        <Footer/>
    </div>
    );
};
export default Home;