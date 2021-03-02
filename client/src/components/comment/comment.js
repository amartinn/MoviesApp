import React from "react";
import styles from "./comment.module.css";
import translate from "../../translations";
import * as ACTIONS from "../../actions/comment";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Comment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      movieId: props.match.params.id,
      updateComment: props.actions.updateComment,
      createComment: props.actions.createComment,
      comments: props.comments,
      commentBody: props.comments.find(x => Number(x.movieId) === Number(props.match.params.id))?.body ?? ''
    };
    this.changeHandler = this.changeHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
  }
  componentDidMount() {
    this.props.actions.getComments().then(c => {
      this.setState(
        {comments:[...c.payload],
        commentBody: c.payload.find(x => Number(x.movieId) === Number(this.state.movieId))?.body ?? ''
        }
        )
    })
  }
  blurHandler(e) {
    const movieId = this.state.movieId;
    const exists = this.state.comments.find((x) => x.movieId === movieId);
    if (exists) {
      this.state.updateComment(movieId, e.target.value);
    } else {
      this.state.createComment(movieId, e.target.value);
    }
  }
  changeHandler(e) {
    this.setState({
      commentBody:e.target.value
    })
  }
  render() {
    
    return (<textarea
      className={styles.textarea}
      value={this.state.commentBody}
      onChange={this.changeHandler}
      onBlur={this.blurHandler}
      placeholder={translate("comment.placeholder")}
      rows="10"
      cols="80"
    ></textarea>)
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS;
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Comment);
