import { Action } from "redux";

import { isAction } from "util/action_type";
import { ICurrentTab } from "resources/tab";
import { receiveCurrentTab } from "actions/tab_actions";

export type State = ICurrentTab;

// A non-rendered tab
const defaultState: State = {
  id: 0,
  title: "unknown",
};

const CurrentTabReducer = (state: State = defaultState, action: Action): State => {
  if (isAction(action, receiveCurrentTab)) {
    return action.payload.tab;
  }

  return state;
};

export default CurrentTabReducer;
