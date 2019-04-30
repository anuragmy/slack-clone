import React, { Component } from "react";
import ChannelSection from "./components/channel/ChannelSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
  }

  addChannel = name => {
    const { channels } = this.state;
    channels.push({ id: channels.length, name });
    this.setState({ channels });
    //TODO: send to server
  };

  setChannel = activeChannel => {
    this.setState({ activeChannel });
    //get channels messages
  };
  render() {
    return (
      <div>
        <ChannelSection
          channels={this.state.channels}
          setChannel={this.setChannel}
          addChannel={this.addChannel}
        />
      </div>
    );
  }
}

export default App;
