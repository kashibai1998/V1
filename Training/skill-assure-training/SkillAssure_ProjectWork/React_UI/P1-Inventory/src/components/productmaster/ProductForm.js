import React from "react";
import { useState } from "react/cjs/react.development";
import { Button, Divider, Form, Icon } from "semantic-ui-react";
import ProductTable from "../producttable/ProductTable";
import './ProductForm.css';

const ProductForm = () => {
    const [show, setShow] = useState(false)

    const showTable = () => {
        setShow(true);
    }

    return (
        <div>
            <Form>
                <Form.Group widths='equal' style={{ textAlign: 'left' }}>
                    <Form.Input fluid label='PRODUCT CODE' placeholder='Product Code' />
                    <Form.Input fluid label='PRODUCT NAME' placeholder='Product Name' />
                    <Form.Input fluid label='PRODUCT TYPE' placeholder='Product Type' />
                    <Form.Input fluid label='UNIT MEASUREMENT' placeholder='Unit Measurement' />
                </Form.Group><br /><br />
                <Form.Group widths='equal' style={{ textAlign: 'left' }}>
                    <Form.Input fluid label='PRICE PER UNIT' placeholder='Price Per Unit' />
                    <Form.Input fluid label='VAT PERCENTAGE' placeholder='Vat Percentage' />
                    <Form.Input fluid label='EFFECTIVE DATE' placeholder='Effective Date' />
                    <Form.Input >
                        <Button icon labelPosition='left' onClick={() => { showTable() }} style={{ marginTop: '7%' }}>
                            <Icon name='plus' size='large' />
                            ADD
                        </Button></Form.Input>

                </Form.Group>
            </Form><br />
            <Divider/><br /><br />
            <div>
                {
                    show === true &&
                    <ProductTable />
                }
            </div>
        </div>


    )
}
export default ProductForm;