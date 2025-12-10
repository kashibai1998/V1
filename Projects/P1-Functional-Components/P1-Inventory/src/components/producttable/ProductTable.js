import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Button, Form, Table } from "semantic-ui-react";
import productData from '../../mock/product.json';
// import { url }  from '../../constants/urlconstants';

const ProductTable = () => {

    const [posts, setPosts] = useState([]);

    useEffect  (() => {
        const fetchProducts = async () => {
            const response = await fetch(`http://localhost:8093/inventory/supplier/allProducts`)
            const productData = await response.json();
            console.log(productData)
            setPosts(productData);
        };
        fetchProducts();
    }, []);


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>PRODUCT CODE</Table.HeaderCell>
                        <Table.HeaderCell>PRODUCT NAME</Table.HeaderCell>
                        <Table.HeaderCell>PRODUCT TYPE</Table.HeaderCell>
                        <Table.HeaderCell>UNIT MEASUREMENT</Table.HeaderCell>
                        <Table.HeaderCell>PRICE PER UNIT</Table.HeaderCell>
                        <Table.HeaderCell>VAT PERCENTAGE</Table.HeaderCell>
                        <Table.HeaderCell>ACTUAL PRICE</Table.HeaderCell>
                        <Table.HeaderCell>EFFECTIVE DATE</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        posts.map((item) => {
                            console.log(item);
                            return (
                                <Table.Row>
                                    <Table.Cell>{item.productCode}</Table.Cell>
                                    <Table.Cell>{item.productName}</Table.Cell>
                                    <Table.Cell>{item.productType}</Table.Cell>
                                    <Table.Cell>{item.unitMeasurement}</Table.Cell>
                                    <Table.Cell>{item.pricePerUnit}</Table.Cell>
                                    <Table.Cell>{item.productVatTax}</Table.Cell>
                                    <Table.Cell>{item.initialPrice}</Table.Cell>
                                    <Table.Cell>{item.productEffectiveDate}</Table.Cell>
                                </Table.Row>
                            )
                        })
                    }


                </Table.Body>
            </Table>
        </div>
    )
}
export default ProductTable;