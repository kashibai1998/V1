import { Component } from "react";
import './Header.sass';
import ReactDOM from 'react-dom/client';
import SideBar from "../sidebar/SideBar";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData:'send data to parent component'
        }
    }
    componentDidMount() {
        this.props.childData(this.state.headerData);
    }
    render() {
        console.log(this.props);

        // const doc = document.createElement('p');
        // doc.textContent = 'Hi, How are you!';
        // document.getElementById('root').append(doc);

        return (
            <div>
                <h1 className='header'>This Header Component</h1>
                <h2 className='subHeader'>My age is {this.props.nameFromParent}</h2>
            </div>
        )
    }
}
export default Header;

// const newRoot = ReactDOM.createRoot(document.getElementById('newRoot'));
// newRoot.render(<SideBar/>)