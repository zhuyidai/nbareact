import axios from "axios";
import * as constants from "./constants";
const changelogin = () => ({
  type: constants.CHANGELOGIN,
  value: true
});
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});
export const login = (account, password) => {
  return dispatch => {
    axios
      .get("nbareact/api/login.json?account=" + account + "&password=" + password)
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changelogin());
        } else alert("faild");
      });
  };
};
