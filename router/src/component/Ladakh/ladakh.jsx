import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/ladakh.jpg";
import "../../App.css"

class ladakh extends React.Component{
    render(){
        return(
            <>
            <center>
                <img src={image} className="imgsrc"/>
                <h2> about ladakh</h2>
                <p>State : Himachal Pradesh Area : 7.12 sq. kms. Altitude : 2050 mtrs approx.. Temperature : summer 28 c / 20 c</p>
            </center>
            </>
        )
    }
}
export default ladakh;