import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

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

const loginApi = (username , pwd, navigate) => {
  console.log("username : ", username);
  console.log("pwd : ", pwd);
  
  return async function (dispatch, getState) {
    try {
      const login = await axios.post("http://3.35.52.88/user/login", {
        username: username,
        password: pwd,
      });
      console.log("login : ", login);
      if (login.data) {
        alert(`로그인 성공`);
        ///history.replace("/");
        navigate("/main", {replace: true});

        const token = login.headers.authorization.split("BEARER ");
        localStorage.setItem("token", token[1]);

        dispatch(loginCheckApi(token));
      } else {
        alert("닉네임과 패스워드를 다시 확인해주세요.");
      }
    } catch (err) {
      window.alert("닉네임과 패스워드를 다시 확인해주세요11.");
      console.log("Error", err);
    }
  };
};

const loginCheckApi = (token) => {
  return async function (dispatch, getState) {
    try {
      const check = await axios.get(
        "http://3.35.52.88/api/user/islogin",
        {
          headers: {
            Authorization: `BEARER ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("check : ", check);
      dispatch(
        logIn({
          username: check.data.username,
          nickname: check.data.nickname,
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
        // draft.is_login = true;
        // draft.user = action.payload.user;
        console.log("action : ",action);
        draft.username = action.payload.username;
        draft.nickname = action.payload.nickname;
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
