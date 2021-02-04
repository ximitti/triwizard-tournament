import { Component } from "react";
import Button from "../Button";

class TournamentScreen extends Component {
  render() {
    const { func, champions } = this.props;
    return (
      <div>
        <h1>Competidores</h1>
        {champions.map((champion, index) => {
          return (
            <div key={index}>
              <p>{champion.name}</p>
              <p>{champion.gender}</p>
              <p>{champion.alive}</p>
            </div>
          );
        })}
        <Button func={func} text="Try again!" />
      </div>
    );
  }
}

export default TournamentScreen;
