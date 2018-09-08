import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "reducers/_root_reducer";
import { receiveTab, incrementTabNum } from "actions/tab_actions";
import TabIndex, { IStateProps, IDispatchProps } from "@nav/tab_index";
import { ITab } from "resources/tab";

const mapStateToProps = (state: IRootState): IStateProps => ({
  tabIndex: state.tabIndex,
  currentTabNumber: state.tabIdNum,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  addTab: (tab: ITab) => dispatch(receiveTab(tab)),
  bumpTabNum: () => dispatch(incrementTabNum()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabIndex);
