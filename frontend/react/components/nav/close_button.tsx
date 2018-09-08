import React, { SFC, MouseEvent } from "react";

interface IProps {
  closeAction: (e: MouseEvent) => void;
}

const CloseButton: SFC<IProps> = (props: IProps) => (
  <div className="close-button" onClick={props.closeAction}>
    <div className="bar bar-1" />
    <div className="bar bar-2" />
  </div>
);

export default CloseButton;
