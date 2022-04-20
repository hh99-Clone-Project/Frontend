import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import NGrid from "../elements/NGrid";
import Post from "./../components/Post";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import { getPostDB } from "./../redux/modules/post";

const Main = (props) => {
  const postList = useSelector((state) => state.post.postList);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [pageNum, setPageNum] = useState(1);

  const scrollEvent = useCallback(
    _.debounce(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      console.log(scrollHeight, scrollTop, clientHeight);
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setPageNum((prev) => prev + 1);
      }
    }, 100)
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    dispatch(getPostDB(token, pageNum));
  }, [pageNum]);

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
      </div>
    </>
  );
};

export default Main;
