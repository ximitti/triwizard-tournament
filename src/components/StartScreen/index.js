import { Component } from "react";
import Button from "../Button";

class StartScreen extends Component {
  render() {
    return (
      <div>
        <h1>Triwizard Tournament</h1>
        <h3>Click to find wizards and start the Tournament!</h3>
        <Button func={this.props.func} />
      </div>
    );
  }
}

export default StartScreen;
