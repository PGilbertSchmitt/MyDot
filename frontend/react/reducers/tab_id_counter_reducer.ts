import { Action } from "redux";

import { isAction } from "util/action_type";
import { incrementTabNum } from "actions/tab_actions";

export type State = number;

// Set default to 1 later, using 5 for testing
const TabIdCounterReducer = (state: State = 5, action: Action) => {
  if (isAction(action, incrementTabNum)) {
    return state + 1;
  }

  return state;
};

export default TabIdCounterReducer;
