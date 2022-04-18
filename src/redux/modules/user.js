import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { useNavigate } from "react-router";

//액션 타입
const SIGNUP = "SIGNUP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

//initialState
const initialState = {};

//액션생성함수
const signUp = createAction(SIGNUP, (userInfo) => ({ userInfo }));
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const logOut = createAction(LOGOUT, () => ({}));

//미들웨어
export const signUpDB = (userInfo) => {
  return function (dispatch, getState) {
    axios
      .post("/user/signup", { ...userInfo })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(signUp(userInfo.username));
  };
};

const loginApi = (username, pwd) => {
  return function (dispatch, getState) {
    axios
      .post("http://3.35.52.88/user/login", {
        username: username,
        password: pwd,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const loginCheckApi = () => {
  return async function (dispatch, getState, { history }) {
    try {
      const check = await axios.post(
        "http://3.35.52.88/api/login",
        {},
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(
        logIn({
          username: check.data.username,
          userId: check.data.userId,
        })
      );
    } catch (err) {
      console.log("에러발생", err);
      alert("로그인 여부 확인에 문제가 생겼습니다.");
    }
  };
};

const logOutApi = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    history.replace("/");
    dispatch(logOut());
  };
};

//리듀서
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
        draft.user = action.payload.user;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
        draft.user = null;
        sessionStorage.removeItem("isLogin");
      }),
    [SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
      }),
  },
  initialState
);

export const actionCreators = {
  signUpDB,
  loginApi,
  loginCheckApi,
  logOutApi,
  logOut,
};
