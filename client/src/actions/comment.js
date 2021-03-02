import {
  UPDATE_COMMENT,
  CREATE_COMMENT,
  GET_COMMENTS
} from "./constants";
import APP from "../sources";

export const updateComment = (movieId, comment) => {
  return (dispatch) => {
    return APP.comments.updateComment(movieId, comment).then(json => {
      return dispatch({
        type: UPDATE_COMMENT,
        payload: json,
      });
    });
  };
};

export const createComment = (movieId, comment) => {
  return (dispatch) => {
    return APP.comments.createComment(movieId, comment).then(json => {
      return dispatch({
        type: CREATE_COMMENT,
        payload: json
      })
    })
  }
}

export const getComments = () => {
  return (dispatch) => {
    return APP.comments.getAll().then(json => {
      return dispatch({
        type: GET_COMMENTS,
        payload: json
      })
    })
  }
}