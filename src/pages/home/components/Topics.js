import React, { PureComponent } from "react";
import { TopicItem, TopicWrapper, Choose } from "../style";
import { connect } from "react-redux";

class Topics extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        <Choose>Choose your favorite team</Choose>
        {list.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img alt="" className="topicpic" src={item.get("imgurl")}></img>
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "topiclist"])
});
export default connect(mapState, null)(Topics);
