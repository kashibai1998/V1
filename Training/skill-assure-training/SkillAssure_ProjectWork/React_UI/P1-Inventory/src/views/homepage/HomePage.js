import React, { useEffect, useState } from "react";
// import InternalSupplier from "../../components/internalsupplier/InternalSupplier"
import InternalSupplier from "../../components/internalsupplier/InternalFormData"
// import ExternalSupplier from "../../components/externalsupplier/ExternalSupplier";
import ExternalSupplier from "../../components/externalsupplier/ExternalFormData";
import { Button, Grid, Segment, Icon, Form, Radio, Header } from "semantic-ui-react";
import { useHistory } from "react-router-dom";


const HomePage = () => {

    let history = useHistory();

    const [value, setValue] = useState('externalSupplier');
    const [internalPost, setInternalPost] = useState([]);


    const navigateToProductMaster = () => {
        history.push("/productmaster");
    }

    const handleValue = (e, { value }) => {
        setValue(value)
    }

    const getDatafromChild = (data) => {
        console.log(data);
        setInternalPost(data);
    }
    console.log(internalPost);



    return (
        <div>
            <div style={{ backgroundColor: '#FEFEFE', paddingTop: '50px' }}>
                <Grid>
                    <Grid.Row>
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
                                        <Button icon labelPosition='left' secondary>
                                            <Icon name='save' size='large' />
                                            SAVE
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column width={2} />
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={1} />
                        <Grid.Column width={15}>
                            <Form>
                                <Form.Group inline>
                                    <Form.Field>
                                        <b><h2>Supplier Type:</h2> </b>
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            style={{ fontSize: '18px' }}
                                            label='Enternal Supplier'
                                            name='radioGroup'
                                            value='externalSupplier'
                                            checked={value === 'externalSupplier'}
                                            onChange={handleValue}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            style={{ fontSize: '18px' }}
                                            label='Internal Supplier'
                                            name='radioGroup'
                                            value='internalSupplier'
                                            checked={value === 'internalSupplier'}
                                            onChange={handleValue}
                                        />
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{ display: "block" }}>
                        {

                            value == "internalSupplier" && <InternalSupplier getDatafromChild={getDatafromChild} />
                        }
                        {
                            value == "externalSupplier" && <ExternalSupplier />
                        }
                    </Grid.Row>
                </Grid>
            </div>
        </div>

    )
}
export default HomePage;