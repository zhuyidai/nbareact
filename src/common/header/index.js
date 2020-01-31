import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store/";
import { actioncreators as loginactioncreators } from "../../pages/login/store/";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchIcon,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoItem,
  SearchInfoList,
  SearchSwitch,
  SearchWrapper,
  Basketball,
  Spinner123
} from "./style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class header extends Component {
  handlescroll() {
    window.scrollTo(0, 600);
  }
  render() {
    const { focused, handleFocus, handleBlur, list, login } = this.props;

    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>

        <Nav>
          <Link to="/">
            <NavItem className="left active" onClick={this.handlescroll}>
              News and Stories
            </NavItem>
          </Link>

          <NavItem className="left">Stats</NavItem>
          <NavItem className="right">Shop</NavItem>
          {login ? (
            <NavItem className="right" onClick={this.props.logout}>
              LOGOUT
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">LOGIN</NavItem>
            </Link>
          )}

          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              ></NavSearch>
            </CSSTransition>
            <SearchIcon
              className={focused ? "focused SearchIcon" : "SearchIcon"}
            ></SearchIcon>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writing">
              <Basketball></Basketball>Writing
            </Button>
          </Link>
          <Button className="reg">Register</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  getListArea() {
    const {
      focused,
      list,
      page,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handlePageChange,
      totalpage
    } = this.props;
    const pagelist = [];
    const newList = list.toJS();
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pagelist.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Trending
            <SearchSwitch
              onClick={() => {
                handlePageChange(page, totalpage, this.spinIcon);
              }}
            >
              <Spinner123
                ref={icon => {
                  this.spinIcon = icon;
                }}
              ></Spinner123>
              Change
            </SearchSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pagelist}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFocus(list) {
      list.size === 0 && dispatch(actionCreators.getlist());
      dispatch(actionCreators.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePageChange(page, totalpage, spin) {
      let originangle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originangle) {
        originangle = parseInt(originangle, 10);
      } else {
        originangle = 0;
      }
      spin.style.transform = "rotate(" + (originangle + 360) + "deg)";
      if (page < totalpage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
    },
    logout() {
      dispatch(loginactioncreators.logout());
    }
  };
};
const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalpage: state.getIn(["header", "totalpage"]),
    login: state.getIn(["login", "login"])
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(header);
