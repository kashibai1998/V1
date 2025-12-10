import React from 'react';
import ComponentF from './ComponentF';
import { NameContext,personDetails } from './ComponentC';
import { useContext } from 'react';

function ComponentE() {

    const name = useContext(NameContext);
    const userDetails = useContext(personDetails);


    return (

        <div>
            <h1>Component E</h1>
            {name + ' ' + userDetails}
            {/* <ComponentF /> */}
        </div>
    )
}

export default ComponentE;
