import { Action } from "redux";
import union from "lodash/union";
import remove from "lodash/remove";

import { isAction } from "util/action_type";
import { ITab, ITabIndex } from "resources/tab";
import { receiveTab, removeTab } from "actions/tab_actions";

export type State = ITabIndex;

const TabIndexReducer = (state: State = [], action: Action): State => {
  if (isAction(action, receiveTab)) {
    // TODO: Maybe check if the id is already being used, but shouldn't happen
    return union([], state, [action.payload.tab]);
  }

  if (isAction(action, removeTab)) {
    return remove(state, (tab: ITab) => (tab.id === action.payload.tab.id));
  }

  return state;
};

export default TabIndexReducer;
