import { Component } from "react";
import Button from "../Button";
import { Board, Borda, QuadroComp, TournamentAnnounce } from "./style.js";

class StartScreen extends Component {
  render() {
    const { gryffindor, slytherin, hufflepuff, ravenclaw } = this.props.houses;
    return (
      <div>
        <Board>
          <TournamentAnnounce>
            <h1>Triwizard Tournament</h1>
            <h3>Click to find wizards and start the Tournament!</h3>
            <Button func={this.props.func} text="Let's begin!" />
          </TournamentAnnounce>
        </Board>
        <Board>
          <h3>Competitors List by House</h3>
          <QuadroComp>
            <Borda house="Gryffindor">
              <h2>Gryffindor</h2>
              {gryffindor.map((competitor, index) => (
                <div key={index}>{competitor.name}</div>
              ))}
            </Borda>
            <Borda house="Slytherin">
              <h2>Slytherin</h2>
              {slytherin.map((competitor, index) => (
                <div key={index}>{competitor.name}</div>
              ))}
            </Borda>
            <Borda house="Hufflepuff">
              <h2>Hufflepuff</h2>
              {hufflepuff.map((competitor, index) => (
                <div key={index}>{competitor.name}</div>
              ))}
            </Borda>
            <Borda house="Ravenclaw">
              <h2>Ravenclaw</h2>
              {ravenclaw.map((competitor, index) => (
                <div key={index}>{competitor.name}</div>
              ))}
            </Borda>
          </QuadroComp>
        </Board>
      </div>
    );
  }
}

export default StartScreen;
