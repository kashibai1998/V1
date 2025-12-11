import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserDetailsTable = (props) => {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);
    const contactNoRef = useRef(null);

    const [userDeatils, setUserDeatils] = useState([]);

    useEffect(async () => {
        (async () => {
            const rawResponse = await fetch('http://localhost:8080/user/all', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let content = await rawResponse.json();
            setUserDeatils(content)
        })();
    },[])


    const editProduct = (product) => {
        console.log(product);
        product.name = nameRef.current.value;
        product.address = addressRef.current.value;
        product.age = ageRef.current.value;
        product.contactNo = contactNoRef.current.value;
    }


    const deleteProduct = (productId) => {
        fetch('http://localhost:8080/user/delete/' + productId, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(res => console.log(res))
    }

    return <div>
        <center>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>AGE</th>
                        <th>CONTACT NO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userDeatils.map(function (product, index) {
                            console.log(product)
                            return (<tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.address}</td><td>{product.age}</td><td>{product.contactNo}</td><td>
                                <input type='button' onClick={editProduct.bind(this, product)} value='EDIT' /><input type='button' onClick={deleteProduct.bind(this, product.id)} value='DELETE' /></td></tr>);

                        })
                    }
                </tbody>
            </table>
        </center>
    </div>
}

export default UserDetailsTable;