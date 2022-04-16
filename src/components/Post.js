import React from "react";
import NGrid from "../elements/NGrid";
import Image from "../elements/NImage";
import Input from "../elements/NInput";
import PostBtn from "../elements/PostBtn";

const Post = (props) => {
  console.log(props);
  return (
    <NGrid
      margin={props.margin}
      border="1px solid #DBDBDB"
      width="615px"
      height="900px"
      bg="#ffffff"
    >
      <NGrid height={"72px"} is_flex>
        <Image
          src={require("../static/IU.jpg")}
          type="circle"
          width="30px"
          height="30px"
          margin="0 10px"
          borderTop
        />
        <NGrid width={"555px"} height={"100%"} line_height={"72px"}>
          {props.nickname}
        </NGrid>
        <NGrid height={"100%"} line_height={"72px"}>
          <svg style={{ width: "30px", cursor: "pointer" }}>
            <circle cx="12" cy="34" r="1.5" />
            <circle cx="6" cy="34" r="1.5" />
            <circle cx="18" cy="34" r="1.5" />
          </svg>
        </NGrid>
      </NGrid>
      <Image
        borderTop
        borderBottom
        width="613px"
        height={"613px"}
        src={props.imageFile}
      ></Image>
      <NGrid is_flex height={"50px"}>
        <NGrid is_flex width={"112px"} height={"24px"} margin={"0 0 0 8px"}>
          <PostBtn />
          <PostBtn type={"Comment"} />
          <PostBtn type={"Dm"} />
        </NGrid>
        <NGrid width={"25px"} margin={"0 8px 0 0"}>
          <PostBtn type={"BookMark"} />
        </NGrid>
      </NGrid>

      <NGrid height="72px" border="1px solid red"></NGrid>
      <NGrid height="33px" line_height="33px">
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
      </NGrid>

      <NGrid height={"54px"}>
        <NGrid></NGrid>
        <hr style={{ border: "0.5px solid #EFEFEF" }} />
        <NGrid height="53px" is_flex>
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
        </NGrid>
      </NGrid>
    </NGrid>
  );
};

export default Post;
