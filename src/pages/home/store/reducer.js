import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topiclist: [],
  newslist: [],
  recommandation: [],
  articlepage: 0,
  scrollstatus: false,
  westteams: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topiclist: fromJS(action.topiclist),
        newslist: fromJS(action.newslist),
        recommandation: fromJS(action.recommandation),
        westteams: fromJS(action.westteams)
      });
    case constants.LOAD_MORE_INFO:
      return state.set("newslist", state.get("newslist").concat(action.list));

    case constants.BACKTOTOP:
      return state.set("scrollstatus", action.show);
    default:
      return state;
  }
};
