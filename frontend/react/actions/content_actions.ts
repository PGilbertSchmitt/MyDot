import { makeAction } from "util/action_type";
import { IWindow } from "resources/content";

export const RECEIVE_WINDOW = "RECEIVE_WINDOW";
export const REMOVE_WINDOW = "REMOVE_WINDOW";

// Action creators

export const receiveWindow = makeAction(RECEIVE_WINDOW)((data: IWindow) => ({
  payload: { data },
}));

export const removeWindow = makeAction(REMOVE_WINDOW)((id: number) => ({
  payload: { id },
}));
