import React, { useEffect } from "react";
import { Header, Footer } from "../";
import LS from "../../utils/localStorageHelper";
import * as ACTIONS from "../../actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const Layout = (props) => {
  //sets userId to localStorage if there isn't one.
  useEffect(() => {
    const key = "_userId";
    const user = LS.getItem(key);
    const {setUser,getUser} = props.actions;
    if (!user) {
      setUser()
    }
    else{
      getUser()
    }
  }, [props.actions]);
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

