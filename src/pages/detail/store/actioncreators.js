import axios from "axios";
import * as constants from "./constants";

const changedetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});
export const getdetail = id => {
  return dispatch => {
    axios
      .get("/api/detail.json")
      .then(res => {
        const result = res.data.data[id - 1];
        dispatch(changedetail(result.title, result.content));
      })
      .catch(function(e) {
        console.log("error");
      });
  };
};
