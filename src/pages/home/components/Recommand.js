import React, { PureComponent } from "react";
import {
  RecommandWrapper,
  RecommandItem,
  Information,
  Livetitle
} from "../style";
import { connect } from "react-redux";

class Recommand extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommandWrapper>
        <Livetitle>FEATURED GAME</Livetitle>
        {list.map(item => {
          return (
            <Information key={item.get("id")}>
              <RecommandItem
                imgUrl={item.get("imgurl")}
                key={item.get("id")}
              ></RecommandItem>
              {item.get("words")}
            </Information>
          );
        })}
      </RecommandWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "recommandation"])
});
export default connect(mapState, null)(Recommand);
