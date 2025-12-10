import React from "react";
import img from "../../assests/images/food.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar-light bg-primary">
        <div className="row">
          <div className="col-sm-1">
            <a className="navbar-brand" href="#" style={{ color: "white" }}>
              <img src={img} width="100px" height="40px"></img>
            </a>
          </div>
          <div className="col-sm-9" />
          <div className="col-sm-2">
            <a className="navbar-brand" href="#" style={{ color: "white" }}>
              Logout
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
