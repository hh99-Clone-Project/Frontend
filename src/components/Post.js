import { useState, useEffect } from "react";
import NGrid from "../elements/NGrid";
import Image from "../elements/NImage";
import Input from "../elements/NInput";
import PostBtn from "../elements/PostBtn";
import PostModal from "./PostModal";
import UpdateModal from "./UpdateModal";
import { LikeDB } from "../redux/modules/post";

// test modal 추가 - tspark20220417
import Grid from "../elements/Grid";
import styled from "styled-components";
import CommentDetailViewModal from "./CommentDetailViewModal";
import { useSelector, useDispatch } from "react-redux";

const Post = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  /* tspark20220417 - start */

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  /* tspark20220417 - end */

  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState(false);

  // Post
  const detailOpen = () => {
    setIsOpen(true);
  };

  const Like = () => {
    dispatch(LikeDB(props.postId));
  };
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
          src={props.imageSrc}
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
          <svg
            onClick={detailOpen}
            style={{
              width: "30px",
              cursor: "pointer",
              visibility:
                userInfo?.nickname === props?.nickname ? "visible" : "hidden",
            }}
          >
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
          {props.favoriteStatus ? (
            <PostBtn onClick={Like} />
          ) : (
            <PostBtn onClick={Like} type={"disLike"} />
          )}
          <PostBtn type={"Comment"} />
          <PostBtn type={"Dm"} />
        </NGrid>
        <NGrid width={"25px"} margin={"0 8px 0 0"}>
          <PostBtn type={"BookMark"} />
        </NGrid>
      </NGrid>

      <NGrid height="72px" padding="10px">
        <NGrid width="200px" margin="0" is_flex>
          <p
            style={{
              width: "40px",
              fontWeight: "600",
              margin: "0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props?.nickname}
          </p>
          <p
            style={{
              margin: "0 0 0 0",
              width: "155px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.content}
          </p>
        </NGrid>

        <p style={{ color: "#8E8EAB", cursor: "pointer" }} onClick={openModal}>
          {props.commentCnt ? `댓글${props.commentCnt}개 모두 보기` : null}
        </p>
      </NGrid>
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
          {props.dayBefore}
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

        <CommentDetailViewModal
          data={props}
          open={modalOpen}
          close={closeModal}
          header="Modal"
        ></CommentDetailViewModal>
        {/*  tspark20220417-End */}
      </NGrid>
      {isOpen ? (
        <PostModal
          data={props}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setDetail={setDetail}
        />
      ) : null}
      {detail ? (
        <UpdateModal isOpen={detail} setIsOpen={setDetail} data={props} />
      ) : null}
    </NGrid>
  );
};

/* tspark20220417 - start */
const CommentsShow = styled.div`
  color: #999;
  padding: 6px 16px;
  cursor: pointer;
`;

const ClosePosting = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 1000;
`;
/* tspark20220417 - end */

export default Post;
