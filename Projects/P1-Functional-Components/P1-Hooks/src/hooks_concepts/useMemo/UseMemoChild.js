import React, { useEffect } from "react";

let memoCounter = 0;
function UseMemoChild() {
    useEffect(() => {
        memoCounter++;
        console.log("called memo child component")
    })
    return <div>called memo child component{memoCounter}</div>
}
export default UseMemoChild;
  