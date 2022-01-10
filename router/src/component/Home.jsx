import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/ladakh.jpg";
import manali from "../assets/images/manali.jpg";
import "../App.css";
class Home extends React.Component{
    render(){
        return(
            <center>
                <Link to="/manali" >
                <img src={manali} className="imgsrc"></img>
                    <h2>manali</h2>
                </Link>
                <br />
                <Link to="ladakh">
                    <img src={image} className="imgsrc"></img>
                    <h2>ladakh</h2>
                </Link>
            </center>
        )
    }
}
export default Home;