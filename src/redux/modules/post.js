import { createAction, handleActions } from "redux-actions";
import produce from "immer";

//액션 타입
const ADDPOST = "ADDPOST";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const GETPOST = "GETPOST";

//initialState
const initialState = {};

//액션 생성 함수
const addPost = createAction(ADDPOST, (postInfo) => ({ postInfo }));
const getPost = createAction(GETPOST, (postList) => ({ postList }));
const updatePost = createAction(UPDATE, (postInfo) => ({ postInfo }));
const deletePost = createAction(DELETE, (postInfo) => ({ postInfo }));

//미들웨어
export const addPostDB = () => {
  return function (dispatch, getState) {};
};
export const updateDB = () => {
  return function (dispatch, getState) {};
};
export const deleteDB = () => {
  return function (dispatch, getState) {};
};

//리듀서
export default handleActions(
  {
    [ADDPOST]: (state, action) => produce(state, (draft) => {}),
    [UPDATE]: (state, action) => produce(state, (draft) => {}),
    [DELETE]: (state, action) => produce(state, (draft) => {}),
    [GETPOST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
