import { Component } from "react";
import { Buttons } from "./style";

class Button extends Component {
  render() {
    return (
      <Buttons onClick={() => this.props.func()}>{this.props.text}</Buttons>
    );
  }
}

export default Button;
