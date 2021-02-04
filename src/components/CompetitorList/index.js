import { Component } from "react";
import Competitor from "../Competitor";
import { CardBoard } from "./style";

class CompetitorList extends Component {
  render() {
    const { champions } = this.props;
    return (
      <CardBoard>
        {champions.map((champion, index) => {
          return <Competitor key={index} champion={champion} />;
        })}
      </CardBoard>
    );
  }
}

export default CompetitorList;
