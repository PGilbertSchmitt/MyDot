import React, { Props } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import { IRootState } from "reducers/_root_reducer";
import TabIndex from "@nav/tab_index_container";

interface IRootProps extends Props<any> {
  store: Store<IRootState>;
}

const Root: React.SFC<IRootProps> = ({ store }) => (
  <Provider store={store}>
    <TabIndex />
  </Provider>
);

export default Root;
