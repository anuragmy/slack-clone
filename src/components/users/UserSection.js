import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import PropTypes from "prop-types";

class UserSection extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <strong className="text-center">Users</strong>
          <div className="card-body list-group">
            <UserList {...this.props} />
            <UserForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

UserSection.propTypes = {
  users: PropTypes.array.isRequired,
  setUserName: PropTypes.func.isRequired
};

export default UserSection;
