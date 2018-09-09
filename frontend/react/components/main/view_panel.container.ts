import { connect } from "react-redux";

import { IRootState } from "reducers/_root_reducer";
import ViewPanel, { IStateProps } from "@main/view_panel";

const mapStateToProps = (state: IRootState): IStateProps => ({
    currentTab: state.currentTab,
});

export default connect(mapStateToProps)(ViewPanel);
