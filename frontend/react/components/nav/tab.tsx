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
    this.clickHandler = this.clickHandler.bind(this);
  }

  public clickHandler() {
    this.props.setCurrentTab({
      id: this.props.id,
      title: this.props.title,
    });
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    return this.state.isActive !== (this.props.id === nextProps.currentTab.id);
  }

  public componentWillReceiveProps(nextProps: IProps) {
    this.setState({
      isActive: this.props.id === nextProps.currentTab.id,
    });
  }

  public render() {
    return (
      <div className={`tab ${this.state.isActive ? "active-tab" : ""}`} onClick={this.clickHandler}>
        <p className="tab-title">{this.props.title}</p>
      </div>
    );
  }
}

export default Tab;
