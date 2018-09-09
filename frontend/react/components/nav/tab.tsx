import React, { Component, MouseEvent } from "react";

import CloseButton from "@nav/close_button";
import { ITab, ICurrentTab } from "resources/tab";

export interface IOwnProps {
  id: number;
  title: string;
}

export interface IStateProps {
  currentTab: ICurrentTab;
}

export interface IDispatchProps {
  setCurrentTab: (tab: ITab) => void;
  deleteTab: (id: number) => void;
}

type IProps = IOwnProps & IStateProps & IDispatchProps;

class Tab extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public clickHandler = () => {
    this.props.setCurrentTab({
      id: this.props.id,
      title: this.props.title,
    });
  }

  public closeSelf = (e: MouseEvent) => {
    e.stopPropagation();
    this.props.deleteTab(this.props.id);
  }

  // Unless we get real bogged down, no need. However, if tab rendering a huge pain,
  // should update only if activeness changes OR the number of tabs changes
  // public shouldComponentUpdate = (nextProps: IProps, nextState: IState) => {
  // }

  public componentWillReceiveProps = (nextProps: IProps) => {
    this.setState({
      isActive: this.props.id === nextProps.currentTab.id,
    });
  }

  private classNames = () => (
    `tab ${this.isActive() ? "active-tab" : ""}`
  )

  private isActive = () => (this.props.currentTab.id === this.props.id);

  public render() {
    return (
      <div className={this.classNames()} onClick={this.clickHandler}>
        <p className="tab-title">{this.props.title}</p>
        <CloseButton closeAction={this.closeSelf} />
      </div>
    );
  }
}

export default Tab;
