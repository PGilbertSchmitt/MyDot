import React, { Component } from "react";

import Tab from "@nav/tab_container";
import { ITab, ITabIndex } from "resources/tab";
import { ITabPayload } from "actions/tab_actions";

export interface IStateProps {
  tabIndex: ITabIndex;
}

export interface IDispatchProps {
  setTab: (tab: ITab) => ITabPayload;
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
          <Tab title="First" id={1} />
          <Tab title="Second" id={2} />
          <Tab title="Third" id={3} />
          <Tab title="Fourth" id={4} />
        </div>
      </div>
    );
  }
}

export default TabIndex;
