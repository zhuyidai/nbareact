import styled from "styled-components";
import logoPic from "../../statics/nba1.png";
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2";
import { BasketballBall } from "styled-icons/fa-solid/BasketballBall";
import { Spinner } from "styled-icons/evil/Spinner";

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  height: 48px;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Nav = styled.div`
  width: 850px;
  height: 100%;
  margin: 0 150px;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  line-height: 56px;
  cursor: pointer;
  :hover {
    background: yellow;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "search"
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  marginleft: 10px;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #969696;
  line-height: 20px;
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const SearchSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`;
export const SearchIcon = styled(SearchAlt2)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;
  bottom: 9px;
  &.focused {
    background: #777;
    color: white;
  }
`;

export const SearchInfoList = styled.div``;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin-left: 20px;
`;

export const Basketball = styled(BasketballBall)`
  width: 18px;
  height: 18px;
  bottom: 9px;
  margin-top: 9px;
  margin-right: 5px;
`;

export const Spinner123 = styled(Spinner)`
  width: 18px;
  height: 18px;
  bottom: 9px;
  margin-right: 2px;
  display: block;
  float: left;
  transition: all 0.2s ease-in;
  transform-origin: center center;
`;
