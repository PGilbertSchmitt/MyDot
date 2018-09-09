import { makeAction } from "util/action_type";
import { ITab, ICurrentTab } from "resources/tab";

export const RECEIVE_CURRENT_TAB = "RECEIVE_CURRENT_TAB";
export const RECEIVE_TAB = "RECEIVE_TAB";
export const REMOVE_TAB = "REMOVE_TAB";
export const INCREMENT_TAB_NUM = "INCREMENT_TAB_NUM";

// Action creators

export const receiveCurrentTab = makeAction(RECEIVE_CURRENT_TAB)((tab: ICurrentTab) => ({
  payload: { tab },
}));

export const receiveTab = makeAction(RECEIVE_TAB)((tab: ITab) => ({
  payload: { tab },
}));

export const removeTab = makeAction(REMOVE_TAB)((id: number) => ({
  payload: { id },
}));

export const incrementTabNum = makeAction(INCREMENT_TAB_NUM)(() => ({
  payload: {},
}));
