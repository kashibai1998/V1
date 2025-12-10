import React from "react";
import img from "../../assests/images/food.jpg";
import { connect } from "react-redux";

const Header = (props) => {
  console.log("props.head", props.user);
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
          {props.user ? (
            <a className="navbar-brand" href="#" style={{ color: "white" }}>
              Logout
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps, null)(Header);
