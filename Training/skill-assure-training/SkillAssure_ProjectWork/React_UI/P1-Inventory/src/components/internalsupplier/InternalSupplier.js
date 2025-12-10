// import React from "react";
// import { Dropdown, Grid, Header, Divider, Button } from "semantic-ui-react";
// import BasicInformation from "./BasicInformation";
// import PostalAddress from "./PostalAddress";
// import PrimaryContact from "./PrimaryContact";

// const stateOptions = [
//     { key: "Burger King", text: "Burger King", value: "Burger King" },
//     { key: "Domious", text: "Domious", value: "Domious" },
//     { key: "KFC", text: "KFC", value: "KFC" }
// ]

// const InternalSupplier = () => {
//     return (
//         <Grid>
//             <Grid.Row >
//                 <Grid.Column width={1} style={{ marginRight: "3.5%" }} />
//                 <Dropdown placeholder='Select Restaurant' search selection options={stateOptions}></Dropdown>
//             </Grid.Row>
//             <Grid.Row>
//                 <Grid.Column width={2} />
//                 <Grid.Column width={3} textAlign={'left'}>
//                     <Header size='huge'>Basic Information</Header>
//                 </Grid.Column>
//                 <Grid.Column width={8}>
//                     <BasicInformation />
//                 </Grid.Column>
//                 <Grid.Column width={3} />
//             </Grid.Row>
//             <Grid.Row/>
//                   {/* <Divider  /> */}
//             <Grid.Row>
//                 <Grid.Column width={2} />
//                 <Grid.Column width={3} textAlign={'left'}>
//                     <Header size='huge'>Postal Address </Header>
//                 </Grid.Column>
//                 <Grid.Column width={8}>
//                     <PostalAddress />
//                 </Grid.Column>
//                 <Grid.Column width={3} /><br />
//             </Grid.Row>
//              <Grid.Row/>
//             {/* <Divider /> */}
//             <Grid.Row>
//                 <Grid.Column width={2} />
//                 <Grid.Column width={3} textAlign={'left'}>
//                     <Header size='huge'>Primary Contact</Header>
//                 </Grid.Column>
//                 <Grid.Column width={8}>
//                     <PrimaryContact />
//                 </Grid.Column>
//                 <Grid.Column width={3} />
//             </Grid.Row>
//             <Grid.Row>
//                 <Button style={{marginLeft:'50%'}}>Submit</Button>
//             </Grid.Row>
//             {/* <Divider /> */}
//         </Grid>
//     )
// }
// export default InternalSupplier;