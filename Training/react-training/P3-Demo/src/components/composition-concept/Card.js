import React from "react";
function Card(props) {
    console.log(props);

    return React.createElement('div', {},
        React.createElement('h1', {}, 'Hi Card'),
        React.createElement('h2', {}, 'This my first card'),
        // React.createElement('h4',{children})
    );
    

    // return (
    //     <div>
    //         <h1>Hi Card!!</h1>
    //         <h2>This my first card</h2>
    //         <h4>{props.children}</h4>
    //     </div>
    // )

}
export default Card;