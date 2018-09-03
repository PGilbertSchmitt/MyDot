import React, { Component } from "react";

import { ITab, ICurrentTab } from "resources/tab";
import { ITabPayload } from "actions/tab_actions";

export interface IOwnProps {
  id: number;
  title: string;
}

export interface IStateProps {
  currentTab: ICurrentTab;
}

export interface IDispatchProps {
  setCurrentTab: (tab: ITab) => ITabPayload;
}

type IProps = IOwnProps & IStateProps & IDispatchProps;

interface IState {
  isActive: boolean;
}

class Tab extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isActive: props.id === props.currentTab.id,
    };
  }

  public render() {
    return (
      <div className="tab">
        <p className="tab-title">{this.props.title}</p>
      </div>
    );
  }
}

export default Tab;
