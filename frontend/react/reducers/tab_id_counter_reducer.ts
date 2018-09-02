import { Action } from "redux";

import { isAction } from "util/action_type";
import { incrementTabNum } from "actions/tab_actions";

export type State = number;

const TabIdCounterReducer = (state: State = 0, action: Action) => {
  if (isAction(action, incrementTabNum)) {
    return state + 1;
  }

  return state;
};

export default TabIdCounterReducer;
