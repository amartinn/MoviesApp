import React from "react";
import { Header, Footer } from "../";
import * as ACTIONS from "../../actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

