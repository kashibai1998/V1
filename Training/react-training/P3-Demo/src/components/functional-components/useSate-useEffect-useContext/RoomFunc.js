import { createContext, useEffect, useState } from "react"
import Appartment from "./Appartment";

export const TenantDetails = createContext();
export default function RoomFunc() {
    const [male, setMale] = useState('Raja');
    const [female, setFemale] = useState('Rani');
    const [roomno, setRoomno] = useState(419);
    const [tenantName, setTenantName] = useState('');
    
    const [rent, setRent] = useState();

    const changeState = () => {
        setMale('Lucky');
        setFemale('Geeta');
        setRoomno(419);
    }

    const clearState = () => {
        setMale('Raja');
        setFemale('Rani');
        setRoomno(419);
    }

    useEffect(clearState,
        []);
    

    const payRent = () => {
        setRent(15000);
        setTenantName('Lucky')
        setTimeout(() => {
            alert('Thank you for paying Rent');
        }, 1000);
    }

    return (
        <div>
            <h1>Room Information!</h1><br />
            {
                male === 'Raja' && female === 'Rani' &&
                <h1>Room Owners:-</h1>
            }
            {
                male != 'Raja' && female != 'Rani' &&
                <div>
                    <h1>Room is already full!</h1>
                    <h2>The below associates are:</h2>
                </div>

            }
            <h2>Male: {male}</h2>
            <h2>Female: {female}</h2>
            <h1>Room No: {roomno}</h1><br />
            {
                male === 'Raja' && female === 'Rani' &&
                <div>
                    <button onClick={changeState}><h3>Is Room avaialble?</h3></button><br /><br /><br />
                </div>
            }
            {
                male != 'Raja' && female != 'Rani' &&
                <div>
                    <button onClick={clearState}><h3>Back to Onwner Page</h3></button> <br /><br /> <br /><br /><br />
                </div>
            }

            {
                male != 'Raja' && female != 'Rani' &&
                <div>
                    <button onClick={payRent}>Check Rent</button>   <br /><br /><br />
                    <h2>Rent Details:</h2>
                    <h2>This month rent paid:{rent}</h2><br /><br /><br />
                </div>
            }
            {
                (male == 'Raja' && female == 'Rani')  &&
                <TenantDetails.Provider value={{ male: [tenantName], roomno: [roomno], rent: [rent] }}>
                    <Appartment />
                </TenantDetails.Provider>
            }


        </div>
    )
}