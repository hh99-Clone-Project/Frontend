import { useState, useEffect } from "react";
import Header from "../components/Header";
import NGrid from "../elements/NGrid";
import Post from "./../components/Post";

import styled from "styled-components";
import ReactLoading from "react-loading";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getPostDB } from "./../redux/modules/post";

const Main = (props) => {
  const postList = useSelector((state) => state.post.postList);
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const [pageNum, setPageNum] = useState(1);
  const [target, setTarget] = useState(""); // target
  const [isLoading, setIsLoading] = useState(false); // isLoading

  /* 로그인 유지-tspark20220418 */
  useEffect(() => {
    dispatch(userActions.loginCheckApi(token));
  }, [token]);

  useEffect(() => {
    console.log("너 리렌더링이니?");
    dispatch(getPostDB(token, pageNum));
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FAFAFA",
          padding: "25px 0 0 0",
        }}
      >
        <NGrid width="940px">
          {postList.map((cur, idx) => {
            return <Post key={cur?.postId} {...cur} margin="0 0 25px 0" />;
          })}
        </NGrid>
        {isLoading ? (
          <NGrid width="940px">
            <LoaderWrap>
              <ReactLoading type="spin" color="#1DA0F6" />
            </LoaderWrap>
          </NGrid>
        ) : null}
        <div ref={setTarget}></div>
      </div>
    </>
  );
};

const LoaderWrap = styled.div`
  width: 615px;
  margin: 0;
  height: 80%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export default Main;
