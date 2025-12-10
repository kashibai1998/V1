import React from "react";
import { Button, Grid, Segment, Icon, Form, Radio, Header, Dropdown, Image } from "semantic-ui-react";
import img from '../../assests/profile.png';

const stateOptions = [
    { key: "Burger King", text: "Burger King", value: "Burger King" },
    { key: "Domious", text: "Domious", value: "Domious" },
    { key: "KFC", text: "KFC", value: "KFC" }
]
const HeaderComponent = () => {
    return (
        <Segment clearing>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={1} />
                    <Grid.Column width={2} textAlign={"left"}>
                        <h1><b>ROS</b></h1>
                    </Grid.Column>
                    <Grid.Column width={9} />

                    <Grid.Column width={3} >
                        <Dropdown placeholder='Select Restaurant' search selection options={stateOptions}></Dropdown>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Image avatar={true} size={'mini'} src={img} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>
    )
}
export default HeaderComponent;