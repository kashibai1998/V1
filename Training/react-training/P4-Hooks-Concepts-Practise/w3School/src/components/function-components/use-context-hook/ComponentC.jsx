import React, { useContext } from "react";
import { UserContext } from './ComponentA';

export default function ComponentC() {
    const nameValue = useContext(UserContext);
    return (
        <h1>Hello ComponentA ---- Getting data from Component A: { nameValue}</h1>
    )
}