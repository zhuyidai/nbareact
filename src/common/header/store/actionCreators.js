import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const change_list = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalpage: Math.ceil(data.length / 10)
});
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const pageChange = page => ({
  type: constants.PAGE_CHANGE,
  page
});
export const getlist = () => {
  return dispatch => {
    axios
      .get("/api/headerList.json")
      .then(res => {
        const data = res.data;
        dispatch(change_list(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
