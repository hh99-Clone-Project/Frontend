import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

//액션 타입
const ADDPOST = "ADDPOST";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const GETPOST = "GETPOST";
const MOREPOST = "MOREPOST";
const LIKE = "LIKE";

//initialState
const initialState = {
  postList: [],
};

//액션 생성 함수
const addPost = createAction(ADDPOST, (postInfo) => ({ postInfo }));
const getPost = createAction(GETPOST, (postList) => ({ postList }));
const updatePost = createAction(UPDATE, (postInfo) => ({ postInfo }));
const deletePost = createAction(DELETE, (postInfo) => ({ postInfo }));
const likePost = createAction(LIKE, (postId) => ({ postId }));

//미들웨어
export const addPostDB = (data, token) => {
  const frm = new FormData();
  frm.append("image", data.image, data.image.name);
  frm.append("contents", data.contents);

  return function (dispatch, getState) {
    axios
      .post("http://3.35.52.88/api/posts", frm, {
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch(addPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPostDB = (token, page, setIsLoading) => {
  return function (dispatch, getState) {
    axios
      .get(`http://3.35.52.88/api/posts?page=${page}`, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          return alert("마지막 게시글 입니다");
        }
        dispatch(getPost(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateDB = (postInfo) => {
  return function (dispatch, getState) {
    dispatch(updatePost(postInfo));
    axios
      .put(
        `http://3.35.52.88/api/posts/${postInfo.postId}`,
        { contents: postInfo.contents },
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteDB = (postInfo) => {
  return function (dispatch, getState) {
    axios
      .delete(`http://3.35.52.88/api/posts/${postInfo.postId}`, {
        headers: {
          Authorization: `BEARER ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(deletePost(postInfo));
      })
      .catch((err) => {});
  };
};

export const LikeDB = (postId) => {
  return function (dispatch, getState) {
    axios
      .put(
        `http://3.35.52.88/api/posts/${postId}`,
        {},
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(likePost(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//리듀서
export default handleActions(
  {
    [ADDPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList.unshift(action.payload.postInfo);
      }),
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.postList.findIndex(
          (cur) => cur.postId === action.payload.postInfo.postId
        );
        console.log(action.payload.postInfo);
        draft.postList[idx] = {
          ...draft.postList[idx],
          content: action.payload.postInfo.contents,
        };
      }),
    [DELETE]: (state, action) =>
      produce(state, (draft) => {
        draft.postList = state.postList.filter(
          (cur) => cur.postId !== action.payload.postInfo.postId
        );
      }),
    [GETPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.postList.push(...action.payload.postList);
      }),
    [LIKE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.postList.findIndex(
          (cur) => cur.postId === action.payload.postId
        );
        draft.postList[idx] = {
          ...draft.postList[idx],
          favoriteStatus: draft.postList[idx].favoriteStatus ? false : true,
        };
      }),
  },
  initialState
);
