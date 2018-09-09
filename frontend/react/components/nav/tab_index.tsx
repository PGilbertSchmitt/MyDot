import React, { Component } from "react";

import Tab from "@nav/tab_container";
import { ITab, ITabIndex } from "resources/tab";
import { ITabPayload } from "actions/tab_actions";

export interface IStateProps {
  tabIndex: ITabIndex;
  currentTabNumber: number;
}

export interface IDispatchProps {
  addTab: (tab: ITab) => ITabPayload;
  bumpTabNum: () => void;
}

type IProps = IStateProps & IDispatchProps;

class TabIndex extends Component<IProps> {
  constructor(props: any) {
    super(props);
    this.renderTabList = this.renderTabList.bind(this);
    this.addTab = this.addTab.bind(this);
  }

  public addTab() {
    const currentTabNum = this.props.currentTabNumber;
    this.props.addTab({
      id: currentTabNum,
      title: "untitled",
    });
    this.props.bumpTabNum();
  }

  public renderTabList() {
    return (
      <div className="tab-index">
        {this.props.tabIndex.map((tab: ITab, i: number) => (
          <Tab key={i} id={tab.id} title={tab.title} />
        ))}
      </div>
    );
  }

  public render() {
    return (
      <div className="tab-bar">
        <div className="add-tab" onClick={this.addTab}>
          <div className="vertical-cross-bar" />
          <div className="horizontal-cross-bar" />
        </div>
        {this.renderTabList()}
      </div>
    );
  }
}

export default TabIndex;
