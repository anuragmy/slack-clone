import React, { Component } from "react";
import ChannelSection from "./components/channel/ChannelSection";
//import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container-fluid" style={{ marginLeft: 0 }}>
        <div style={{ position: "absolute", left: 0, top: 0 }}>
          <ChannelSection
            {...this.state}
            setChannel={this.setChannel}
            addChannel={this.addChannel}
          />
        </div>
      </div>
    );
  }
}

export default App;
