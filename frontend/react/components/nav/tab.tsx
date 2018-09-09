import React, { Component, MouseEvent } from "react";
import findIndex from "lodash/findIndex";

import CloseButton from "@nav/close_button";
import { ITab, ICurrentTab, ITabIndex } from "resources/tab";
import { defaultState } from "reducers/current_tab_reducer";

export interface IOwnProps {
  id: number;
  title: string;
}

export interface IStateProps {
  currentTab: ICurrentTab;
  tabIndex: ITabIndex;
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
    this.props.setCurrentTab(this.toTab());
  }

  public closeSelf = (e: MouseEvent) => {
    e.stopPropagation();
    // If active, gotta set the active tab to the one before it (or next if it's the first)
    // Gotta do this before trying to remove the tab just in case
    if (this.isActive()) {
      if (this.props.tabIndex.length === 1) {
        this.setCurrentTabToEmpty();
      } else {
        // Since a tabIndex length of 0 is impossible (since this tab currently exists),
        // the length can only be 2 or greater
        this.setNextTab();
      }
    }
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

  private toTab = () => ({
    id: this.props.id,
    title: this.props.title,
  })

  private setCurrentTabToEmpty = () => {
    this.props.setCurrentTab(defaultState);
  }

  private setNextTab = () => {
    const { tabIndex } = this.props;
    let newCurrentTab: ITab;
    const loc = findIndex(tabIndex, (tab: ITab) => (this.props.id === tab.id));
    const newLoc = loc === 0 ? loc + 1 : loc - 1;
    newCurrentTab = tabIndex[newLoc];
    this.props.setCurrentTab(newCurrentTab);
  }

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
