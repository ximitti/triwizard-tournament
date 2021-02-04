import { Component } from "react";
import { Card, ImageBox, Picture, Info, InfoBox } from "./style";

class Competitor extends Component {
  render() {
    const { champion } = this.props;
    return (
      <Card house={champion.house}>
        <ImageBox>
          <Picture src={champion.image} alt={champion.name} />
        </ImageBox>
        <InfoBox>
          <Info>{champion.name}</Info>
          <Info house={champion.house}>{champion.house}</Info>
        </InfoBox>
      </Card>
    );
  }
}

export default Competitor;
