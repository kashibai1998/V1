import React, { useState } from "react";
import CustomHooks1 from "./CustomHooks1";

function DocTitleOne() {

    const [count, setCount] = useState(0);

    CustomHooks1(count);
   
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(preState => preState + 1)}>Counter1</button>
        </div>
    )
}
export default DocTitleOne;