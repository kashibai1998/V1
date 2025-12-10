import React, { useState } from 'react';
import './DeviceCard.scss';
import { Card, Icon, Grid } from 'semantic-ui-react';
//import imgs from '../../../assets/Images/2.png';
//import nba from '../../../mock/MicroInteractionTab/nba.json'

function DeviceCard() {
    const dataList = [
        {
            "icon": "folder open",
            "Header": "Send SMS",
            "description": "Raise an Online service ticket for service outage",
        },
        {
            "icon": "mail outline",
            "Header": "Send Email",
            "description": "Message Service centre for service outage information",
        },
        {
            "icon": "mail outline",
            "Header": "Send Email",
            "description": "Follow up phone call with customer to ensure issue is resolved",
        },
        {
            "icon": "phone volume",
            "Header": "Call Customer",
            "description": "Contact assigned engineer for update of restoration of service",
        },
    ];
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);

    // exclude column list from filter
    const excludeColumns = ["longitude", "latitude"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        DeviceCard(value);
    };

    const DeviceCard = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(dataList);
        else {
            const filterData = dataList.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setData(filterData);
        }
    }


    return (

        <div className="box-container">
            <Grid relaxed >
                <Grid.Row>
                    <Grid.Column  >
                        <Card.Group>
                            {data.map((d, i) => {
                                return (
                                    <Card className="tab-card" style={{ height: 150, width: 300 }}>
                                        <Grid>
                                            <Grid.Row>

                                                <Grid.Column width={3} textAlign="left">
                                                    <div className="icon-section">
                                                        <Icon name={d.icon} />
                                                    </div>

                                                </Grid.Column>
                                                <Grid.Column width={13} textAlign="left" >{d.Header}</Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column textAlign="left">{d.description}</Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Card>
                                )
                            })}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>



















        // <Grid>
        //     <Grid.Row>
        //         <Grid.Column  width={8}>
        //             <Card style={{height:165,width:1000}}>
        //                 <Card.Content header='Send SMS' />
        //                 <Card.Content description='Raise an Online service ticket for service outage' />
        //             </Card>

        //         </Grid.Column>
        //         <Grid.Column width={8}>
        //             <Card style={{height:165,width:1000}}>
        //                 <Card.Content header='Send Email' />
        //                 <Card.Content description='Message Service centre for service outage information' />
        //             </Card>
        //         </Grid.Column>
        //     </Grid.Row>
        //     <Grid.Row>
        //         <Grid.Column  width={8}>
        //             <Card  style={{height:165,width:1000}}>
        //                 <Card.Content header='Send Email' />
        //                 <Card.Content description='Follow up phone call with customer to ensure issue is resolved' />
        //             </Card>

        //         </Grid.Column>
        //         <Grid.Column width={8}>
        //             <Card style={{height:165,width:1000}}>
        //                 <Card.Content header='Call Customer' />
        //                 <Card.Content description='Contact assigned engineer for update of restoration of service' />
        //             </Card>
        //         </Grid.Column>
        //     </Grid.Row>
        // </Grid>

    );
}
export default DeviceCard;

