import React from "react";
import { useParams } from "react-router";

const About = () => {
    let { company } = useParams();
    return (
        <h1>About Component by {company}</h1>  //Return all path parameter
    )
}
export default About;