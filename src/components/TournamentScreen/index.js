import { Component } from "react";
import Button from "../Button";
import CompetitorList from "../CompetitorList";
import { Board, Container } from "./style";

class TournamentScreen extends Component {
  render() {
    const { func, champions } = this.props;
    return (
      <Container>
        <Board>
          <h1>The chosen ones!</h1>
          <CompetitorList champions={champions} />
          <Button func={func} text="Try again!" />
        </Board>
      </Container>
    );
  }
}

export default TournamentScreen;
