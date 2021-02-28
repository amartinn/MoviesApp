import React from "react";
import { Select } from "@material-ui/core";
import * as ACTIONS from "../../actions/language";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class LanguageDropdown extends React.Component {
  constructor(props) {
    super();
    const language = props.language;
    this.state = {
      language,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ language: e.target.value });
    this.props.actions.updateLanguage(e.target.value);
  }
  render() {
    return (
      <Select
        native
        value={this.state.language}
        onChange={this.handleChange}
        inputProps={{
          name: "language",
          id: "language",
        }}
      >
        <option aria-label="None" value="en">
          EN
        </option>
        <option value="bg">BG</option>
      </Select>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown);
