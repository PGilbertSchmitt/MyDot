import { combineReducers } from "redux";

import CurrentTabReducer, { State as CurrentTabState } from "reducers/current_tab_reducer";
import TabIndexReducer, { State as TabIndexState } from "reducers/tab_index_reducer";
import TabIdCounterReducer, { State as TabIdState } from "reducers/tab_id_counter_reducer";
import ContentReducer, { State as ContentState } from "reducers/content_reducer";

export interface IRootState {
  currentTab: CurrentTabState;
  tabIndex: TabIndexState;
  tabIdNum: TabIdState;
  contentMap: ContentState;
}

export default combineReducers<IRootState>({
  currentTab: CurrentTabReducer,
  tabIndex: TabIndexReducer,
  tabIdNum: TabIdCounterReducer,
  contentMap: ContentReducer,
});
