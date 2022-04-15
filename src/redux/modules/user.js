import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { signUpRes } from "../../shared/mockApi";

//액션 타입
const SIGNUP = "SIGNUP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

//initialState
const initialState = {};

//액션생성함수
const signUp = createAction(SIGNUP, (userInfo) => ({ userInfo }));
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const logOut = createAction(LOGOUT, (userInfo) => ({ userInfo }));

//미들웨어
export const signUpDB = (userInfo) => {
  return function (dispatch, getState) {
    dispatch(signUp(userInfo.username));
  };
};
export const logInDB = () => {
  return function (dispatch, getState) {};
};
export const logOutDB = () => {
  return function (dispatch, getState) {};
};

//리듀서
export default handleActions(
  {
    [LOGIN]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
    [SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
      }),
  },
  initialState
);

export const actionCreators = { signUpDB, logInDB, logOutDB };
