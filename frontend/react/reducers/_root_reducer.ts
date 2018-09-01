import { combineReducers } from "redux";

import CurrentTabReducer, { State as CurrentTabState } from "reducers/current_tab_reducer";
import TabIndexReducer, { State as TabIndexState } from "reducers/tab_index_reducer";

export interface IRootState {
  currentTab: CurrentTabState;
  tabIndex: TabIndexState;
}

export default combineReducers<IRootState>({
  currentTab: CurrentTabReducer,
  tabIndex: TabIndexReducer,
});
