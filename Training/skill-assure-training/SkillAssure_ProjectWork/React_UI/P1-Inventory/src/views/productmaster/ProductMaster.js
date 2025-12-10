import React from "react";
import { Button, Grid, Segment, Icon, Form, Radio, Header, GridRow } from "semantic-ui-react";
import ProductForm from "../../components/productmaster/ProductForm";
import { useHistory } from "react-router-dom";

const ProductMaster = () => {
    let history = useHistory();

    const callToSupplierPage = () => {
        history.push("/");
    }

    return (
        <div style={{ backgroundColor: 'transparent', paddingTop: '50px' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={5} textAlign={'left'} >
                        <Header size="huge"><Icon name="arrow left" onClick={() => callToSupplierPage()} />Add Product Master</Header>
                    </Grid.Column>
                    <Grid.Column width={5} />
                    <Grid.Column width={5}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Button icon labelPosition='left'>
                                        <Icon name='copy' size='large' />
                                        IMPORT
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Button icon labelPosition='left' secondary>
                                        <Icon name='save' size='large' />
                                        SAVE
                                    </Button>
                                </Grid.Column>
                                <Grid.Column width={3} />
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <GridRow>
                    <Grid.Column width={1}/>
                    <Grid.Column width={5} textAlign={'left'} style={{ paddingLeft: '2%' }}>
                        <p style={{ fontSize: '22px', paddingLeft: '10%' }}>Supplier Name</p>
                    </Grid.Column>
                </GridRow>
            </Grid>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2} />
                    <Grid.Column width={12}>
                        <ProductForm />
                    </Grid.Column>
                    <Grid.Column width={2} />
                </Grid.Row>
            </Grid>
        </div>
    )
}
export default ProductMaster;