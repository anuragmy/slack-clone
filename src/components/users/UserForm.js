import React from "react";
import PropTypes from "prop-types";

class UserForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const node = this.refs.username;
    const userName = node.value;
    this.props.setUserName(userName);
    node.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Add User"
            className="form-control"
            ref="username"
          />
        </div>
      </form>
    );
  }
}

UserForm.propTypes = {
  setUserName: PropTypes.func.isRequired
};

export default UserForm;
