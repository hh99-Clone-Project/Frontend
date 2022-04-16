import React from "react";
import Header from "../components/Header";
import NGrid from "../elements/NGrid";
import Post from "./../components/Post";
import { postList } from "../shared/mockApi";

const Main = (props) => {
  const _postList = postList.postList;
  return (
    <>
      <Header />
      <div
        style={{
          height: "100%",
          backgroundColor: "#FAFAFA",
        }}
      >
        <NGrid width="940px">
          {_postList.map((cur, idx) => {
            return <Post key={cur.postId} {...cur} margin="25px 0 0 0" />;
          })}
        </NGrid>
      </div>
    </>
  );
};

export default Main;
