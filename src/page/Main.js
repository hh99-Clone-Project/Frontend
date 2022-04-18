import { useState, useEffect } from "react";
import Header from "../components/Header";
import NGrid from "../elements/NGrid";
import Post from "./../components/Post";
import { postList } from "../shared/mockApi";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Main = (props) => {
  const _postList = postList.postList;
  const [pageNum, setPageNum] = useState(1);
  const [target, setTarget] = useState(""); // target

  const [isLoading, setIsLoading] = useState(false); // isLoading

  const getPost = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      console.log(entry);
      observer.unobserve(entry.target);
      setIsLoading(true);
      console.log(isLoading);
      //포스트 가져오기
      console.log("무한스크롤 중");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      observer.observe(target);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(getPost, {
        threshold: 1,
      });
      observer.observe(target);
      return () => observer && observer.disconnect();
    }
  }, [target]);

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
          {_postList.map((cur, idx) => {
            return <Post key={cur.postId} {...cur} margin="0 0 25px 0" />;
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
