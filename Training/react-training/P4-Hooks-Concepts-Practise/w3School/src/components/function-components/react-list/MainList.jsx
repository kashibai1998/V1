import React from "react";
import DisplayList from "./DisplayList";

const MainList = () => {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];

    return (
        <div>
            <h1>React List</h1>
            {
                cars.map((item) => <DisplayList key1={item.id} carName={item.brand} />)
            }
        </div>
    )
}
export default MainList;