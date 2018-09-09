import React, { Props } from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import { IRootState } from "reducers/_root_reducer";
import App from "@core/app";

interface IRootProps extends Props<any> {
  store: Store<IRootState>;
}

const Root: React.SFC<IRootProps> = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
