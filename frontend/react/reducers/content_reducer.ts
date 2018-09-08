import { Action } from "redux";
import clone from "lodash/cloneDeep";

import { isAction } from "util/action_type";
import { IWindowMap } from "resources/content";
import { receiveWindow, removeWindow } from "actions/content_actions";

export type State = IWindowMap;

const ContentReducer = (state: State = {}, action: Action) => {
  const newState = clone(state);

  if (isAction(action, receiveWindow)) {
    newState[action.payload.data.id] = clone(action.payload.data);
  }

  if (isAction(action, removeWindow)) {
    delete newState[action.payload.id];
    return newState;
  }

  return newState;
};

export default ContentReducer;
