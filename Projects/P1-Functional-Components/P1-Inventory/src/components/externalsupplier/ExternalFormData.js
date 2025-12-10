import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Form, Grid, Dropdown, Button, Header } from "semantic-ui-react";



const ExternalFormData = (props) => {
    // const [internalData, setInternalData] = useState({});
    const [businessName, setBusinessName] = useState("string");
    const [tradeName, setTradeName] = useState("string");
    const [address, setAddress] = useState("string");
    const [city, setCity] = useState("string");
    const [state, setState] = useState("string");
    const [zipcode, setZipcode] = useState(0);
    const [country, setCountry] = useState("string");
    const [email, setEmail] = useState("string");
    const [mobileNo, setMobileNo] = useState(0);
    const [fax, setFax] = useState(0);
    const [telephone, setTelephone] = useState(0);
    const [bankName, setBankName] = useState("string");
    const [branchAccount, setBranchAccount] = useState("string");
    const [accountHolderName, setAccountHolderName] = useState("string");
    const [bankCode, setBankCode] = useState(0);
    const [accountNumber, setAccountNumber] = useState(0);


    let externalSupplierData;
    const internalInfoData = (e) => {
        externalSupplierData = {
            "supplierId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "supplierType": "Internal",
            "image": "string",
            "supplierBusinessName": businessName,
            "supplierTradeName": tradeName,
            "email": email,
            "mobileNumber": mobileNo,
            "telephoneNumber": telephone,
            "faxNumber": fax,
            "supplierAddress": {
                "addressId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "address": address,
                "city": city,
                "state": state,
                "pincode": zipcode,
                "country": country
            },
            "supplierBank": {
                "bankInfoId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "bankName": bankName,
                "bankBranchName": branchAccount,
                "accountHolderName": accountHolderName,
                "bankIFSCCode": bankCode,
                "accountNumber": accountNumber,
            },
            "products": [
                {
                    "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "productCode": 0,
                    "productName": "string",
                    "productType": "string",
                    "pricePerUnit": 0,
                    "unitMeasurement": "string",
                    "productEffectiveDate": "2021-09-16",
                    "productVatTax": 0
                }
            ]
        }

        console.log(externalSupplierData);
        // e.preventDeafault();
    }




    const postExternalSupplier = async () => {
        console.log("Hello", externalSupplierData);
        try {
            const response = await fetch(`http://localhost:8093/inventory/supplier/add/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(externalSupplierData)
            });
            const productData = await response.json();
            console.log(productData);
        }
        catch (err) {
            console.error(`ERROR: ${err}`);
        };
    }


    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Grid.Row>
                                <Header size='huge'>Basic Information</Header>
                            </Grid.Row>
                            <Grid.Row style={{ paddingTop: '75%' }}>
                                <Header size='huge'>Address Details</Header>
                            </Grid.Row>
                            <Grid.Row style={{ paddingTop: '45%' }}>
                                <Header size='huge'>Bank Information</Header>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column widt={4} />
                    </Grid.Row>


                    <Grid.Column width={9}>
                        <Form onSubmit={internalInfoData()}>

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Business Name'
                                    onChange={(e) => {
                                        setBusinessName(e.target.value);
                                    }}
                                />
                                <Form.Input fluid label='' placeholder='Legal/Trade Name' onChange={(e) => {
                                    setTradeName(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Mobile Number' onChange={(e) => {
                                    setMobileNo(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Telephone' onChange={(e) => {
                                    setTelephone(e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Email' onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Fax' onChange={(e) => {
                                    setFax(e.target.value);
                                }} />
                            </Form.Group><br />


                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Address' onChange={(e) => {
                                    setAddress(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Zip Code' onChange={(e) => {
                                    setZipcode(e.target.value);
                                }} />

                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Town/City' onChange={(e) => {
                                    setCity(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='State/Region' onChange={(e) => {
                                    setState(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Country' onChange={(e) => {
                                    setCountry(e.target.value);
                                }} />
                            </Form.Group><br />

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Bank Name' onChange={(e) => {
                                    setBankName(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Branch Account' onChange={(e) => {
                                    setBranchAccount(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Account Holder Name' onChange={(e) => {
                                    setAccountHolderName(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Bank Sort Code' onChange={(e) => {
                                    setBankCode(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Account Number' onChange={(e) => {
                                    setAccountNumber(e.target.value);
                                }} />
                            </Form.Group>
                            <br />


                        </Form>

                    </Grid.Column>

                    <Grid.Column width={2} />
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={4} />
                    <Grid.Column width={8} >
                        <Button onClick={postExternalSupplier}>Save</Button>
                    </Grid.Column>
                    <Grid.Column width={4} />
                </Grid.Row>
            </Grid>
        </div >
    )
}
export default ExternalFormData;