import { useEffect, useState } from "react"

export default function Effect() {
    const [counter, setCounter] = useState(1)
    const [calc, setCalc] = useState(2)
    console.log("effect")
    useEffect(() => {
      // setTimeout(() => {
      //     setCounter((curr)=>(curr+1))
      // },1000)
      setCalc(() => counter + 2);
    }, [counter]);
    return (
        <div>
            <h1>use effect</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(c => c + 1)}>calc</button>
            <p>{calc }</p>
        </div>
    )
}