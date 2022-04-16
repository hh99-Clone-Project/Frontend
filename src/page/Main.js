import React from "react";
import Header from "../components/Header";
import Grid from "../elements/Grid";
import Post from "./../components/Post";
import { postList } from "../shared/mockApi";

const Main = (props) => {
  const _postList = postList.postList;
  return (
    <>
      <Header />
      <Grid width="940px">
        {_postList.map((cur, idx) => {
          return <Post key={cur.postId} {...cur} margin="25px 0 0 0" />;
        })}
      </Grid>
    </>
  );
};

export default Main;
