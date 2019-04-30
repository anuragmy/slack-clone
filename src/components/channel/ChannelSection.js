import React, { Component } from "react";
import ChannelForm from "./ChannelForm";
import ChannelList from "./ChannelList";

class ChannelSection extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ChannelList {...this.props} />
        <ChannelForm {...this.props} />
      </div>
    );
  }
}

export default ChannelSection;
