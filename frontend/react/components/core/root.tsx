import React, { Props } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import { IRootState } from "reducers/_root_reducer";

interface IRootProps extends Props<any> {
  store: Store<IRootState>;
}

const Root: React.SFC<IRootProps> = ({ store }) => (
  <Provider store={store}>
    <h1>React root!</h1>
  </Provider>
);

export default Root;
