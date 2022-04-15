import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import PostBtn from "../elements/PostBtn";

const Post = () => {
  return (
    <Grid border={"1px solid black"} width={"615px"} height={"900px"}>
      <Grid height={"72px"} is_flex>
        <Image
          src={require("../static/IU.jpg")}
          type={"circle"}
          width={"30px"}
          height={"30px"}
          margin={"0 10px"}
        />
        <Grid width={"555px"} height={"100%"} line_height={"72px"}>
          닉넴
        </Grid>
        <Grid height={"100%"} line_height={"72px"}>
          <svg style={{ width: "30px", cursor: "pointer" }}>
            <circle cx="12" cy="34" r="1.5" />
            <circle cx="6" cy="34" r="1.5" />
            <circle cx="18" cy="34" r="1.5" />
          </svg>
        </Grid>
      </Grid>
      <Image height={"613px"} src={require("../static/IU.jpg")}></Image>
      <Grid is_flex height={"50px"}>
        <Grid is_flex width={"112px"} height={"24px"} margin={"0 0 0 8px"}>
          <PostBtn />
          <PostBtn type={"Comment"} />
          <PostBtn type={"Dm"} />
        </Grid>
        <Grid width={"25px"} margin={"0 8px 0 0"}>
          <PostBtn type={"BookMark"} />
        </Grid>
      </Grid>

      <Grid border={"1px solid blue"} height={"160px"}>
        <Grid height={"103px"}></Grid>
        <hr style={{ backgroundColor: "#FAFAFA" }} />
        <Grid height={"53px"}></Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
