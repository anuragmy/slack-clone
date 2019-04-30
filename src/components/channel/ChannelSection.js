import React, { Component } from "react";
import ChannelForm from "./ChannelForm";
import ChannelList from "./ChannelList";
import PropTypes from "prop-types";

class ChannelSection extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-header">
          <strong className="text-center">Channels</strong>
          <div className="card-body list-group ">
            <ChannelList {...this.props} />
            <ChannelForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  addChannel: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired
};

export default ChannelSection;
