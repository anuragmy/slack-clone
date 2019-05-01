import React from "react";
import PropTypes from "prop-types";

class User extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.user.name}</li>
      </div>
    );
  }
}

User.porpTypes = {
  user: PropTypes.object.isRequired
};

export default User;
