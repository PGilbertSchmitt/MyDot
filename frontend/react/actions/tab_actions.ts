import { Dispatch } from "redux";

import { makeAction } from "util/action_type";
import { ITab, ICurrentTab } from "resources/tab";

export const RECEIVE_CURRENT_TAB = "RECEIVE_CURRENT_TAB";
export const ADD_TAB = "ADD_TAB";
export const REMOVE_TAB = "REMOVE_TAB";

// Action creators

export const receiveCurrentTab = makeAction(RECEIVE_CURRENT_TAB)((tab: ICurrentTab) => ({
  payload: { tab },
}));

export const addTab = makeAction(ADD_TAB)((tab: ITab) => ({
  payload: { tab },
}));

export const removeTab = makeAction(REMOVE_TAB)((tab: ITab) => ({
  payload: { tab },
}));
