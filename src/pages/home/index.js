import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, Backtop } from "./style";
import nba from "../../statics/kobe1.jpg";
import Topics from "./components/Topics";
import Recommand from "./components/Recommand";
import List from "./components/List";
import Writer from "./components/Writer";
import { actioncreators } from "./store";
import { connect } from "react-redux";

class home extends PureComponent {
  handlescroll() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img alt="" className="nba2020" src={nba}></img>
            <Topics></Topics>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Writer></Writer>
            <Recommand></Recommand>
          </HomeRight>
          {this.props.scrollstatus ? (
            <Backtop onClick={this.handlescroll}>Back to top</Backtop>
          ) : null}
        </HomeWrapper>
      </div>
    );
  }
  componentDidMount() {
    this.props.changehomedata();
    this.bindEvent();
  }
  bindEvent() {
    window.addEventListener("scroll", this.props.changescroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changescroll);
  }
}
const mapState = state => ({
  scrollstatus: state.getIn(["home", "scrollstatus"])
});

const mapDispatch = dispatch => ({
  changehomedata() {
    const action = actioncreators.gethomeinfo();
    dispatch(action);
  },
  changescroll() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actioncreators.toggle(true));
    } else {
      dispatch(actioncreators.toggle(false));
    }
  }
});
export default connect(mapState, mapDispatch)(home);
