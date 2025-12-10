import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Form, Grid, Dropdown, Button, Header, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const stateOptions = [
    { key: "Burger King", text: "Burger King", value: "Burger King" },
    { key: "Domious", text: "Domious", value: "Domious" },
    { key: "KFC", text: "KFC", value: "KFC" }
]


const InternalFormData = (props) => {
    // const [internalData, setInternalData] = useState({});
    const [resturantName, setResturantName] = useState("string");
    const [businessName, setBusinessName] = useState("string");
    const [tradeName, setTradeName] = useState("string");
    const [address, setAddress] = useState("string");
    const [city, setCity] = useState("string");
    const [state, setState] = useState("string");
    const [zipcode, setZipcode] = useState(0);
    const [country, setCountry] = useState("string");
    const [firstName, setFirstName] = useState("string");
    const [middleName, setMiddleName] = useState("string");
    const [lastName, setLastName] = useState("string");
    const [email, setEmail] = useState("string");
    const [mobileNo, setMobileNo] = useState(0);
    const [fax, setFax] = useState(0);
    const [telephone, setTelephone] = useState(0);

    // let history = useHistory();
    let userdata;
    const internalInfoData = (e) => {
        userdata = {
            "supplierId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "resturantName": resturantName,
            "supplierBusinessName": businessName,
            "supplierTradeName": tradeName,
            "supplierAddress": {
                "addressId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "address": address,
                "city": city,
                "state": state,
                "pincode": zipcode,
                "country": country,
            },
            "primaryContact": {
                "firstName": firstName,
                "middleName": middleName,
                "lastName": lastName,
                "email": email,
                "fax": fax,
                "mobile": mobileNo,
                "telephone": telephone
            }
        }

        console.log(userdata);
        // e.preventDeafault();
    }




    const postInternalSupplier = async () => {
        console.log("Hello", userdata);
        try {
            const response = await fetch(`http://localhost:8093/inventory/supplier/add/internal/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            });
            const productData = await response.json();
            console.log(productData);
        }
        catch (err) {
            console.error(`ERROR: ${err}`);
        };
    }

    // const navigateToProductMaster = () => {
    //     history.push("/productmaster");
    // }


    return (
        <div>
            <Grid>
                {/* <Grid.Row>
                    <Grid.Column width={6} textAlign={'left'} style={{ paddingLeft: '2%' }}>
                        <Header size="huge"><Icon name="arrow left" />Add New Supplier</Header>
                    </Grid.Column>
                    <Grid.Column width={5} />
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Button icon labelPosition='left' onClick={() => navigateToProductMaster()}>
                                        <Icon name='plus' size='large' />
                                        ADD PRODUCT MASTER
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Button icon labelPosition='left' secondary >
                                        <Icon name='save' size='large' />
                                        SAVE
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={2} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row >
                    <Grid.Column width={1} style={{ marginRight: "3.5%" }} />
                    <Dropdown placeholder='Select Restaurant' search selection options={stateOptions}></Dropdown>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3} />
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Grid.Row>
                                <Header size='huge'>Basic Information</Header>
                            </Grid.Row>
                            <Grid.Row style={{ paddingTop: '45%' }}>
                                <Header size='huge'>Postal Address</Header>
                            </Grid.Row>
                            <Grid.Row style={{ paddingTop: '45%' }}>
                                <Header size='huge'>Primary Contact</Header>
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
                                <Form.Input fluid label='' placeholder='Address' onChange={(e) => {
                                    setAddress(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Town/City' onChange={(e) => {
                                    setCity(e.target.value);
                                }} />
                            </Form.Group><br />

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='State/Region' onChange={(e) => {
                                    setState(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Zip Code' onChange={(e) => {
                                    setZipcode(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Country' onChange={(e) => {
                                    setCountry(e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='First Name' onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Middle Name' onChange={(e) => {
                                    setMiddleName(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Last Name' onChange={(e) => {
                                    setLastName(e.target.value);
                                }} />
                            </Form.Group><br />

                            <Form.Group widths='equal'>
                                <Form.Input fluid label='' placeholder='Email' onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Mobile Number' onChange={(e) => {
                                    setMobileNo(e.target.value);
                                }} />
                                <Form.Input fluid label='' placeholder='Telephone' onChange={(e) => {
                                    setTelephone(e.target.value);
                                }} />
                            </Form.Group>
                        </Form>

                    </Grid.Column>

                    <Grid.Column width={2} />
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={4} />
                    <Grid.Column width={8} >
                        <Button onClick={postInternalSupplier}>Save</Button>
                    </Grid.Column>
                    <Grid.Column width={4} />
                </Grid.Row>
            </Grid>
        </div >
    )
}
export default InternalFormData;