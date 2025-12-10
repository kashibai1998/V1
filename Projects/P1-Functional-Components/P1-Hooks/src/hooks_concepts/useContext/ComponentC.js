import React from 'react';
import ComponentE from './ComponentE';
import ComponentF from './ComponentF';

export const NameContext = React.createContext()
export const personDetails = React.createContext()

function ComponentC() {   //CompoentC have to call in App Component means parent component

    return (
        <div>
            <NameContext.Provider value={'Lucky'}>
                <personDetails.Provider value={"Pujari"}>
                    <ComponentE />
                    <ComponentF />
                </personDetails.Provider>
            </NameContext.Provider>
        </div>
    )
}

export default ComponentC;
