import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1>Quickfood Training</h1>
            <p>Easy way to get started with us.</p>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn more
            </Link>
        </div>
    )
}
export default HomePage;