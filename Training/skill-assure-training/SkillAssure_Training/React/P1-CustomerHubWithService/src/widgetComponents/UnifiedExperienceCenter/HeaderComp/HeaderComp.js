import React,{useState} from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
//import imgs from '../../../assets/Images/2.png';
import './MicroInteraction.scss';


function HeaderComp() {
    const dataList = [
        {
            "icon": "phone volume",
            "Header": " Number of Interactions : 50987",
            "description": "Billing Issues",
            "Channel" :"Mobile"
        },
        {
            "icon": "mobile alternate",
            "Header": "Number of Interactions : 15897",
            "description": "Service Outage",
            "Channel" :"Call Center"
        },
        {
            "icon": "tag",
            "Header": "Number of Interactions : 12398",
            "description": "Change in Plan",
            "Channel" :"Chatbot"
        },
        {
            "icon": "copy outline",
            "Header": "Number of Interactions : 10987",
            "description": "Data Exhausted",
            "Channel" :"Mobile"
        },
        {
            "icon": "phone volume",
            "Header": "Number of Interactions : 8789",
            "description": "Payment Issues",
            "Channel" :"Call Center"
        },
        {
            "icon": "mobile alternate",
            "Header": "Number of Interactions : 7894",
            "description": "Recommended Products",
            "Channel" :"Mobile"
        },
        {
            "icon": "tag",
            "Header": "Number of Interactions : 7192",
            "description": "Home Mover",
            "Channel" :"Call Center"
        },
        {
            "icon": "copy outline",
            "Header": "Number of Interactions : 6578",
            "description": "Internet Outage",
            "Channel" :"Mobile"
        },
    ];
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);

    // exclude column list from filter
    const excludeColumns = ["longitude", "latitude"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        HeaderComp(value);
    };

    const HeaderComp = (value) => {
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
                                <Card.Group >
                                {data.map((d, i) => {
                                       return (
                                    <Card className="tab-card" style={{marginLeft:75, height: 180, width: 300 }}>
                                        <Grid>
                                            <Grid.Row>
                                                
                                                <Grid.Column width={3} textAlign="left">
                                                    <div className="icon-section">
                                                        {i+1}
                                                    </div>

                                                </Grid.Column>
                                                <Grid.Column width={13} textAlign="left" ><b>{d.description}</b>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row style={{marginBottom:"0%"}}>
                                                <Grid.Column textAlign="left">{d.Header}</Grid.Column>
                                              
                                            </Grid.Row>
                                            <Grid.Row style={{marginBottom:"10%",marginTop:"0%"}}>
                                            <Grid.Column width={16} textAlign="left" >Most Efficent Channel: {d.Channel}</Grid.Column>
                                            </Grid.Row>
                                           
                                        </Grid>
                                    </Card>
                                 ) })}
                                </Card.Group>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                
            
        </div>

    )
}
export default HeaderComp;