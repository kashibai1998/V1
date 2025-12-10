import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function EventListnerExample() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseMoverEvent = e => {
        console.log("called mouseevnet");
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('add event calling', mouseMoverEvent)
    },[])

    return (
        <div>
            {/* <h2>Hiiiiiiii</h2> */}
            <h1>Hooks X - {x} Y -  {y}</h1>
        </div>
    )

}
export default EventListnerExample;