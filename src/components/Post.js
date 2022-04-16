import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import PostBtn from "../elements/PostBtn";

const Post = (props) => {
  console.log(props);
  return (
    <Grid
      margin={props.margin}
      border="1px solid #DBDBDB"
      width="615px"
      height="900px"
    >
      <Grid height={"72px"} is_flex>
        <Image
          src={require("../static/IU.jpg")}
          type="circle"
          width="30px"
          height="30px"
          margin="0 10px"
          borderTop
        />
        <Grid width={"555px"} height={"100%"} line_height={"72px"}>
          {props.nickname}
        </Grid>
        <Grid height={"100%"} line_height={"72px"}>
          <svg style={{ width: "30px", cursor: "pointer" }}>
            <circle cx="12" cy="34" r="1.5" />
            <circle cx="6" cy="34" r="1.5" />
            <circle cx="18" cy="34" r="1.5" />
          </svg>
        </Grid>
      </Grid>
      <Image
        borderTop
        borderBottom
        width="613px"
        height={"613px"}
        src={props.imageFile}
      ></Image>
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

      <Grid height="72px" border="1px solid red"></Grid>
      <Grid height="33px" line_height="33px">
        <p
          style={{
            width: "580px",
            letterSpacing: "2px",
            color: "#828282",
            fontSize: "10px",
            margin: "0 0 0 14px",
          }}
        >
          7일 전
        </p>
      </Grid>

      <Grid height={"54px"}>
        <Grid></Grid>
        <hr style={{ border: "0.5px solid #EFEFEF" }} />
        <Grid height="53px" is_flex>
          <Input
            margin={"0 0 0 40px"}
            border={"none"}
            placehorder={"댓글 달기..."}
            shape={"textarea"}
          ></Input>
          <p
            style={{
              width: "30px",
              fontSize: "13px",
              color: "#0095f6",
              margin: "0 20px 0 0",
            }}
          >
            게시
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Post;
