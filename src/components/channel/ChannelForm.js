import React, { Component } from "react";
import PropTypes from "prop-types";

class ChannelForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    const node = this.refs.channel;
    const channelName = node.value;
    if (node.value === "" || null) return;
    console.log(channelName);
    this.props.addChannel(channelName);
    node.value = "";
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-group">
        <input
          type="text"
          ref="channel"
          className="form-control"
          placeholder="Add Channel"
        />
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired
};

export default ChannelForm;
