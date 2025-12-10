import React from "react";
const AboutPage = (props) => {
    return (
           <div>
        <h2>About</h2>
            <p>Quickfood Training is a simple app</p>
            {props.email}
    </div> 
    )  
}
export default AboutPage;