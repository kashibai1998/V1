import React, { useEffect, useState, useRef } from "react";

function CustomHooks1(count) {

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}
export default CustomHooks1;