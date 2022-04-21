import { RESP } from "../../response";

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

// actions
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creators
const getComment = createAction(GET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (commentInfo) => ({
  commentInfo,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

// initialState
const initialState = {
  list: [],
};

// middleWares
const getCommentApi = (postId) => {
  return async function (dispatch, getState) {
    //console.log("CommentApiPostId : ", postId);
    try {
      const response = await axios.get(
        `http://3.35.52.88/api/comments/${postId}/1`,
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      //addLikeDBconst response = RESP.COMMENTPOSTIDGET;
      //console.log("response : ",response);
      dispatch(getComment(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const addCommentApi = (postId, commentInfo) => {
  return async function (dispatch, getState) {
    try {
      const comment = await axios.post(
        `http://3.35.52.88/api/comments`,
        {
          postId: postId,
          comments: commentInfo,
        },
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(addComment(comment.data));
    } catch (err) {
      console.log(err);
      alert("댓글 작성에 실패하였습니다.");
    }
  };
};

const deleteCommentApi = (commentId) => {
  console.log("commentId : ",commentId)
  return async function (dispatch, getState) {
    try {
      await axios.delete(`http://3.35.52.88/api/comments/${commentId}`, {
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
        },
      });
      alert("댓글이 삭제되었습니다");
      dispatch(deleteComment(commentId));
    } catch (err) {
      console.log(err);
      alert("댓글 삭제에 실패하였습니다.");
    }
  };
};

// const deleteCommentDB = (commentId, postId) => {
//   return async function (dispatch, getState, { history }) {
//     const response = await axiosInstance.delete(`/api/comment/${commentId}`);
//     // const response = RESP.COMMENTCOMMENTIDDELETE;
//     if ((response.status = 200)) {
//       window.alert("댓글이 삭제되었습니다.");
//       dispatch(getCommentDB(postId));
//     }
//   };
// };



// reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
        console.log("comment_list :  ", action);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.list.comments.push(action.payload.commentInfo);
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log("action : ",action);
        draft.list.comments = draft.list.comments.filter(
          (v) => v.commentId !== action.payload.commentId
        );
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  getComment,
  getCommentApi,
  addCommentApi,
  deleteCommentApi,
};

export { actionCreators };
