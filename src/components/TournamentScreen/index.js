import { Component } from "react";
import Button from "../Button";
import CompetitorList from "../CompetitorList";
import { Board } from "./style";

class TournamentScreen extends Component {
  render() {
    const { func, champions } = this.props;
    return (
      <Board>
        <h1>Competitors!</h1>
        <CompetitorList champions={champions} />
        <Button func={func} text="Try again!" />
      </Board>
    );
  }
}

export default TournamentScreen;
