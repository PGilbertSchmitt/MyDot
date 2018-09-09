import { Action } from "redux";
import clone from "lodash/cloneDeep";

import { isAction } from "util/action_type";
import { IWindowMap, ContentTypes } from "resources/content";
import { receiveWindow, removeWindow } from "actions/content_actions";

export type State = IWindowMap;

// DELETE: Default state for testing
const defaultState: IWindowMap = {
  1: {
    id: 1,
    type: ContentTypes.FULL_WINDOW,
    data: "1: title is First",
  },
  2: {
    id: 2,
    type: ContentTypes.FULL_WINDOW,
    data: "2: title is Second",
  },
  3: {
    id: 3,
    type: ContentTypes.FULL_WINDOW,
    data: "3: title is Third",
  },
  4: {
    id: 4,
    type: ContentTypes.FULL_WINDOW,
    data: "4: title is Fourth",
  },
};

const ContentReducer = (state: State = defaultState, action: Action) => {
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
