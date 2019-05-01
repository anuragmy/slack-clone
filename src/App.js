import React, { Component } from "react";
import ChannelSection from "./components/channel/ChannelSection";
import UserSection from "./components/users/UserSection";
//import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      users: []
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

  setUserName = name => {
    const { users } = this.state;
    users.push({ id: users.length, name });
    this.setState({ users });
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
          <UserSection {...this.state} setUserName={this.setUserName} />
        </div>
      </div>
    );
  }
}

export default App;
