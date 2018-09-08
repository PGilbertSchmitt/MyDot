import { Action } from "redux";
import union from "lodash/union";
import remove from "lodash/remove";
import { cloneDeep } from "lodash";

import { isAction } from "util/action_type";
import { ITab, ITabIndex } from "resources/tab";
import { receiveTab, removeTab } from "actions/tab_actions";

export type State = ITabIndex;

// DELETE: Just for testing
const defaultState: ITabIndex = [
  { id: 1, title: "First" },
  { id: 2, title: "Second" },
  { id: 3, title: "Third" },
  { id: 4, title: "Fourth" },
];

const TabIndexReducer = (state: State = defaultState, action: Action): State => {
  const newState = cloneDeep(state);
  if (isAction(action, receiveTab)) {
    // TODO: Maybe check if the id is already being used, but shouldn't happen
    return union([], newState, [action.payload.tab]);
  }

  if (isAction(action, removeTab)) {
    return remove(newState, (tab: ITab) => (tab.id !== action.payload.id));
  }

  return newState;
};

export default TabIndexReducer;
