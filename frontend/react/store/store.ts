import { createStore } from "redux";

import rootReducer, { IRootState } from "reducers/_root_reducer";

export default createStore<IRootState, any, any, any>(
  rootReducer,
);
