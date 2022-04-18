import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { axios } from "axios";

//액션 타입
const ADDPOST = "ADDPOST";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const GETPOST = "GETPOST";

//initialState
const initialState = {
  postList: [
    {
      postId: "1",
      imageFile: "/images/basic.jpg",
      contents: "내용",
      dayBefore: "7일 전",
      commentCnt: "2개",
      nickname: "정영호",
      likestatus: true,
    },
  ],
  paging: { start: null, next: null, size: 5 },
};

//액션 생성 함수
export const uploadPost = createAction(ADDPOST, (postInfo) => ({ postInfo }));
const getPost = createAction(GETPOST, (postList) => ({ postList }));
const updatePost = createAction(UPDATE, (postInfo) => ({ postInfo }));
const deletePost = createAction(DELETE, (postInfo) => ({ postInfo }));

//미들웨어
export const addPostDB = (data, token) => {
  return function (dispatch, getState) {
    axios
      .post("url", { ...data })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateDB = (postInfo) => {
  return function (dispatch, getState) {
    axios
      .put(
        `url/api/posts/${postInfo.postId}`,
        { contents: postInfo.contents },
        "token"
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteDB = () => {
  return function (dispatch, getState) {};
};

//리듀서
export default handleActions(
  {
    [ADDPOST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.postInfo);
      }),
    [UPDATE]: (state, action) => produce(state, (draft) => {}),
    [DELETE]: (state, action) => produce(state, (draft) => {}),
    [GETPOST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
