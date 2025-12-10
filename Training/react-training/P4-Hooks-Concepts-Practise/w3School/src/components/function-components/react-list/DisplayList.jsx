import React from "react";

const DisplayList = (props) => {
    return (
        <div>
            <h1>{ props.key1} My Car name is { props.carName}</h1> 
        </div>
    )
}
export default DisplayList;