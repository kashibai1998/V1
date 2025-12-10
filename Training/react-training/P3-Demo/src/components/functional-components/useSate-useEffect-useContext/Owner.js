import { useContext } from "react";
import { TenantDetails } from "./RoomFunc";

const Owner = (props) => {
    const data = useContext(TenantDetails)
    console.log(data, props, "data");
    return (
        <div>
            <h1>Tenant Details:</h1>
            <h2>Room No: {data.roomno}</h2>
            <h2>Tenant name: {data.male}</h2>
            <h2>Rent Paid: {data.rent}</h2>
        </div>
    )
}
export default Owner;