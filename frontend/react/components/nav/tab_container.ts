import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "reducers/_root_reducer";
import Tab, { IOwnProps, IStateProps, IDispatchProps } from "@nav/tab";
import { receiveCurrentTab, removeTab } from "actions/tab_actions";
import { removeWindow } from "actions/content_actions";
import { ICurrentTab } from "resources/tab";

const mapStateToProps = (state: IRootState, ownProps: IOwnProps): IStateProps => ({
  currentTab: state.currentTab,
  tabIndex: state.tabIndex,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  setCurrentTab: (tab: ICurrentTab) => { dispatch(receiveCurrentTab(tab)); },
  deleteTab: (id: number) => {
    dispatch(removeTab(id));
    // Since tab and content ids are linked by ID, the same id can be used to delete its window.
    dispatch(removeWindow(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tab);
