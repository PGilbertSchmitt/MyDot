import React, { SFC } from "react";

import TabIndex from "@nav/tab_index_container";
import ViewPanel from "@main/view_panel_container";

const App: SFC<{}> = () => (
  <div>
    <TabIndex />
    <ViewPanel />
  </div>
);

export default App;
