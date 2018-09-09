import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "reducers/_root_reducer";
import Tab, { IOwnProps, IStateProps, IDispatchProps } from "@nav/tab";
import { receiveCurrentTab, removeTab } from "actions/tab_actions";
import { ICurrentTab } from "resources/tab";

const mapStateToProps = (state: IRootState, ownProps: IOwnProps): IStateProps => ({
  currentTab: state.currentTab,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  setCurrentTab: (tab: ICurrentTab) => { dispatch(receiveCurrentTab(tab)); },
  deleteTab: (id: number) => { dispatch(removeTab(id)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tab);
