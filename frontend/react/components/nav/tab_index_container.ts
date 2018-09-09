import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IRootState } from "reducers/_root_reducer";
import { receiveTab, incrementTabNum } from "actions/tab_actions";
import TabIndex, { IStateProps, IDispatchProps } from "@nav/tab_index";
import { ITab } from "resources/tab";

import { receiveWindow } from "actions/content_actions";
import { ContentTypes, IWindow } from "resources/content";

const mapStateToProps = (state: IRootState): IStateProps => ({
  tabIndex: state.tabIndex,
  currentTabNumber: state.tabIdNum,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  // I'm wondering if this is an inefficient way of handling multiple concurrent, independent actions
  addTab: (tab: ITab) => {
    const defaultWindowType: IWindow = {
      id: tab.id,
      type: ContentTypes.FULL_WINDOW,
      data: `${tab.id.toString()}: title is ${tab.title}`,
    };
    dispatch(receiveWindow(defaultWindowType));
    dispatch(receiveTab(tab));
  },
  bumpTabNum: () => { dispatch(incrementTabNum()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabIndex);
