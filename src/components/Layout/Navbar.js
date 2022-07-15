import React, { Fragment } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";

import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticaticated, loading }, logout }) => {
  const authLinks = (
    <ul className="nav-links">
      <li>
        <Link to="/dashboard">
          <i className=" fa fa-user"></i> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/logout">
          <i className=" fa fa-sign-out-alt"></i> <span>Logout</span>
        </Link>
      </li>
    </ul>
  );




  const guestLinks = (
    <ul className="nav-links">
      <li>
        <Link to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login">
           Login
        </Link>
      </li>
    </ul>
  );


  return (
    <nav className="navbar">
        <h1>
            <Link to ="/">HOME</Link>
        </h1>
        {
            !loading &&(
                <Fragment>{isAuthenticaticated? authLinks:guestLinks}</Fragment>
            )
        }
    </nav>
  )
};

Navbar .propTypes={
    logoout:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,

}

const mapStateToProps=(state)=>({
    auth:state.auth,

})
export default connect(mapStateToProps,{logout})(Navbar);
