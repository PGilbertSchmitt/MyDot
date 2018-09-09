import React, { Component } from "react";
import { ICurrentTab } from "resources/tab";

export interface IStateProps {
  currentTab: ICurrentTab;
}

class ViewPanel extends Component<IStateProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        The window!
      </div>
    );
  }
}

export default ViewPanel;
