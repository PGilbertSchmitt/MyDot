import React, { Component } from "react";
import { ICurrentTab } from "resources/tab";
import { IWindowMap, ContentTypes } from "resources/content";

export interface IStateProps {
  currentTab: ICurrentTab;
  windowMap: IWindowMap;
}

class ViewPanel extends Component<IStateProps> {
  constructor(props: any) {
    super(props);
  }

  private renderConent = () => {
    const currentWindowId = this.props.currentTab.id;
    const currentWindow = this.props.windowMap[currentWindowId];
    if (!currentWindow) {
      return (
        // Good place to render the start page with instructions and whatnot
        <p>There's no window because there's no default on start</p>
      );
    }

    if (currentWindow.type === ContentTypes.FULL_WINDOW) {
      return (
        <p>{currentWindow.data}</p>
      );
    } else {
      return (
        <p>This type of window content has no rendering yet.</p>
      );
    }
  }

  public render() {
    return (
      <div>
        {this.renderConent()}
      </div>
    );
  }
}

export default ViewPanel;
