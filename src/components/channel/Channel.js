import React, { Component } from "react";
import PropTypes from "prop-types";

class Channel extends Component {
  onClick = e => {
    e.preventDefault();
    const { channel, setChannel } = this.props;
    setChannel(channel);
  };

  render() {
    const { channel } = this.props;
    return (
      <div>
        <li>
          <a onClick={this.onClick}>{channel.name}</a>
        </li>
      </div>
    );
  }
}

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default Channel;
