import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore, Toptitle } from "../style";
import { connect } from "react-redux";
import { actioncreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getmoreinfo, page } = this.props;
    return (
      <div>
        <Toptitle>News and Stories</Toptitle>
        {list.map((item, index) => {
          return (
            <Link key={index} to={"/detail/" + item.get("id")}>
              <ListItem>
                <img alt="" className="listpic" src={item.get("imgurl")}></img>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("news")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getmoreinfo(page)}>Loading More</LoadMore>
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn(["home", "newslist"]),
  page: state.getIn(["home", "articlepage"])
});

const mapDispatch = dispatch => ({
  getmoreinfo(page) {
    dispatch(actioncreators.getmoreinfo(page));
  }
});
export default connect(mapState, mapDispatch)(List);
