import React, { PureComponent } from "react";
import { WriterItem, WriterWrapper, Teams, Wins, Westteam } from "../style";
import { connect } from "react-redux";

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterItem>Team Standings</WriterItem>
        <Teams>
          Teams
          {list.map(item => {
            return (
              <Westteam key={item.get("id")}>{item.get("teamname")}</Westteam>
            );
          })}
        </Teams>
        <Wins>
          Win-Lose
          {list.map(item => {
            return <Westteam key={item.get("id")}>{item.get("wins")}</Westteam>;
          })}
        </Wins>
      </WriterWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn(["home", "westteams"])
});
export default connect(mapState, null)(Writer);
