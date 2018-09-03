import React, { Component } from "react";

import Tab from "@nav/tab";
import { ITab, ITabIndex } from "resources/tab";
import { State as CurrentTabState } from "reducers/current_tab_reducer";
import { ITabPayload } from "actions/tab_actions";

export interface IStateProps {
  tabIndex: ITabIndex;
  currentTab: CurrentTabState;
}

export interface IDispatchProps {
  setTab: (tab: ITab) => ITabPayload;
  setCurrentTab: (tab: ITab) => ITabPayload;
}

type IProps = IStateProps & IDispatchProps;

class TabIndex extends Component<IProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="tab-bar">
        <div className="add-tab">
          <div className="vertical-cross-bar" />
          <div className="horizontal-cross-bar" />
        </div>
        <div className="tab-index">
          <Tab title="First" />
          <Tab title="Second" />
        </div>
      </div>
    );
  }
}

export default TabIndex;
