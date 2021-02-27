import { UPDATE_COMMENT } from "./constants";
import APP from "../sources";

export const updateComment = (movieId, comment) => {
  return (dispatch) => {
    return APP.comments.updateComment(movieId, comment).then((json) => {
      return dispatch({
        type: UPDATE_COMMENT,
        payload: { movieId, comment },
      });
    });
  };
};
