import React, { Component } from "react";

interface IProps {
  title: string;
}

class Tab extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
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
