import React, { Component } from "react";
import PropTypes from "prop-types";

class Channel extends Component {
  onClick = e => {
    const { setChannel, channel } = this.props;
    e.preventDefault();
    setChannel(channel);
  };

  render() {
    const { channel, activeChannel } = this.props;
    const active = channel === activeChannel ? "active" : "";
    return (
      <div>
        <li
          className={active}
          style={{
            listStyle: "none",
            cursor: "pointer"
          }}
        >
          <a className="list-group-item" onClick={this.onClick}>
            {channel.name}
          </a>
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
