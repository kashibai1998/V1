import { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SideBar from "../../components/sidebar/SideBar";
import RoomFunc from "../../components/functional-components/useSate-useEffect-useContext/RoomFunc";
import ReduxComponent from "../../components/redux-component/ReduxComponent";
import CompositionComp from "../../components/composition-concept/CompositionComp";
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Lucky",
            age: 25,
            data:null
        }
    }
    changeName = () => {
        this.setState({
            name:'Geeta'
        })
    }

    dataFromChild = (newData) => {
        this.setState({
            data:newData
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                {/* <Header nameFromParent={this.state.age} childData={this.dataFromChild} /> */}
                {/* <RoomFunc/> */}
                {/* <h1>Hi HomePage</h1>
                <p>My name is {this.state.name}</p>
                <button onClick={this.changeName}>Click Here!</button> */}
                {/* <SideBar/> */}
                {/* <Footer /> */}
                {/* <ReduxComponent /> */}
                <CompositionComp/>
            </div>
        )
    }
}
export default HomePage;