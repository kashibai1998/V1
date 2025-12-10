import { useState } from "react";
import Async from "../async-test/Async";
import Output from "./Output";

function ButtonExp() {
    const [changedText, setChangedText] = useState(false);
    const showData = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h1>Hello Testing</h1>
            {!changedText && <Output>It's a good to see</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={showData}>show</button>

            <div>
                <Async/>
            </div>
        </div>
    );
}

export default ButtonExp;