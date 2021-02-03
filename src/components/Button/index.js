import { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={() => this.props.func()}>Lets begin!</button>;
  }
}

export default Button;
