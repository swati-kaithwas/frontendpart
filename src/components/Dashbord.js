import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
const Dashboard = ({ auth: { user } }) => {
  return (
    <>
      <div style={{ marginTop: "6rem", textAlign: "center" }}>
        <h1> welcome, {user && user.name}</h1>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  auth: propTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
