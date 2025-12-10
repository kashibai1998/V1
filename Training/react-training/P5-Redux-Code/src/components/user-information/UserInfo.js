// import React, { Component } from "react";
// import { useDispatch, useSelector, connect } from "react-redux";

// //class component

// class UserInfo extends Component {

//     perHandler = () => {
//         this.props.Perm_EMP();
//     }

//     tempHandler = () => {
//         this.props.Temp_EMP();
//     }

//     render() {
//         let stateData1=this.props.stateData
//         return (
//             <React.Fragment>
//                 <div style={{ textAlign: 'çenter' }}>
//                     {
//                         (Object.keys(stateData1).length) !== 0 &&
//                         <div>
//                             <h4>EID {stateData1.eid}</h4>
//                             <h4>Name {stateData1.name}</h4>
//                             <h4>Age {stateData1.age}</h4>
//                             <h4>Address {stateData1.address}</h4>
//                             <h4>Salary {stateData1.salary}</h4>
//                         </div>
//                     }
//                     {
//                         (Object.keys(stateData1).length) === 0 &&
//                         <div>
//                             <h2 style={{ color: 'red' }}>Please choose below Emplyoyee categories</h2>
//                         </div>
//                     }
//                 </div><br /><br />
//                 <div>
//                     <button onClick={this.perHandler}>Permant Emplyoyee</button><br /><br />
//                     <button onClick={this.tempHandler}>Temp Emplyoyee</button><br /><br />
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return (
//         {
//             stateData: state
//         }
//     )
// }

// const mapDispatchToProps = dispatch => {
//     return (
//         {
//             Perm_EMP: ()=>dispatch({ type: 'Perm_EMP' }),
//             Temp_EMP: ()=>dispatch({ type: 'Temp_EMP' }),
//         }
//     )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);


// //functional component

// // function UserInfo() {
// //     const dispatch = useDispatch();
// //     const stateData = useSelector(state => state);
// //     console.log(stateData);

// //     const perHandler = () => {
// //         dispatch({ type: 'Perm_EMP' })
// //     }

// //     const tempHandler = () => {
// //         dispatch({ type: 'Temp_EMP' })
// //     }
// //     console.log('data', stateData,Object.keys(stateData).length);
// //     return (
// //         <React.Fragment>
// //             {/* <h1>user information</h1> */}
// //             <div style={{ textAlign: 'çenter' }}>
// //                 {
// //                     (Object.keys(stateData).length) !== 0 &&
// //                     <div>
// //                         <h4>EID {stateData.eid}</h4>
// //                         <h4>Name {stateData.name}</h4>
// //                         <h4>Age {stateData.age}</h4>
// //                         <h4>Address {stateData.address}</h4>
// //                         <h4>Salary {stateData.salary}</h4>
// //                     </div>
// //                 }
// //                 {
// //                     (Object.keys(stateData).length) === 0 &&
// //                     <div>
// //                         <h2 style={{color:'red'}}>Please choose below Emplyoyee categories</h2>
// //                     </div>
// //                 }
// //             </div><br /><br />
// //             <div>
// //                 <button onClick={perHandler}>Permant Emplyoyee</button><br /><br />
// //                 <button onClick={tempHandler}>Temp Emplyoyee</button><br /><br />
// //             </div>
// //         </React.Fragment>
// //     );
// // }

// // export default UserInfo;