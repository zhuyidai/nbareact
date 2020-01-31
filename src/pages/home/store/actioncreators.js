import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changehomedata = result => ({
  type: constants.CHANGE_HOME_DATA,
  topiclist: result.topiclist,
  newslist: result.newslist,
  recommandation: result.recommandation,
  westteams: result.westteams
});
export const gethomeinfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changehomedata(result));
    });
  };
};

const loadmoreinfo = list => ({
  type: constants.LOAD_MORE_INFO,
  list: fromJS(list)
});
export const getmoreinfo = page => {
  return dispatch => {
    axios.get("/api/homelist.json?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(loadmoreinfo(result));
    });
  };
};

export const toggle = show => ({
  type: constants.BACKTOTOP,
  show
});
