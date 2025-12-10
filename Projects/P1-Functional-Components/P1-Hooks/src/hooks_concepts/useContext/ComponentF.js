import React from 'react';
import { useContext } from 'react';
import { personDetails } from './ComponentC';

function ComponentF() {

    const userDetails = useContext(personDetails);
    return (

        <div>
            <h1>Component F</h1>
            {userDetails}
        </div>
    )
}

export default ComponentF;
