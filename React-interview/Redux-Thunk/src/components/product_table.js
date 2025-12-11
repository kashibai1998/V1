import React from 'react';
import { Button } from 'react-bootstrap';

const ProductTable = (props) => {
    return (
        <div><center>
            <table border='2'>
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th>ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            {props.products.map((product, index) =>
         (<tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.quantity}</td><td>{product.price}</td>
                    <td>
                        <Button variant="primary" value="EDIT" onClick={props.renderEditProductForm.bind(this, product, props)}>EDIT</Button>&nbsp;&nbsp;
                        <Button variant="primary" value="DELETE" onClick={props.deleteProduct.bind(this, index, product.id)}>DELETE</Button>                        
                    </td>
        </tr>)
            )
}
            </tbody>
            </table>
            </center>
        </div>        
    )
}
export default ProductTable;
