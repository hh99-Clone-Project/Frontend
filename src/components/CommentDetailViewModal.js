import React, { useState, useEffect, useRef } from "react";
import "../shared/App.css";
import { actionCreators as commentActions } from "../redux/modules/comment";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiBookmarkLine } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";
import CommentDetailMoreModal from "./CommentDetailMoreModal";

const CommentDetailViewModal = (props) => {
  const dispatch = useDispatch();
  const { open, close, data } = props;

  const commentsList = useSelector((state) => state.comment.list.comments);

  const loginUser = useSelector((state) => state.user?.userInfo);
  const postList = useSelector((state) => state.post.postList);

  /* CommentDetailMoreModal Modal */
  const [commentDetailMoreModal, SetCommentDetailMoreModal] = useState(false);
  const [hasComment, setHasComment] = useState("");


  /* Comment Delete */
  const commentDeleteClick = (commentId) => {
    dispatch(commentActions.deleteCommentApi(commentId));
  };

  /* like */
  const [like, setLike] = useState(props.like);
  const liked = props.like;
  const [delLiked, setDelLiked] = useState(0);
  const [addLiked, setAddLiked] = useState(0);

  // Props에서 data받아오기
  const postId = props.data.postId;


  const imageFile = props.data.imageFile;
  const postNickname = props.data.nickname;
  const imageSrc = props.data.imageSrc;

  // input에 넣은 text 값 가져오기

  const changeComment = (e) => {
    setHasComment(e.target.value);
  };

  const addComment = (postId) => {
    dispatch(commentActions.addCommentApi(postId, hasComment));
    setHasComment("");
  };

  const addLike = () => {
    setLike(true);
    setAddLiked(1);
    setDelLiked(0);
  };

  const delLike = () => {
    setLike(false);
    setAddLiked(0);
    setDelLiked(-1);
  };

  const deleteComment = (commentId1) => {
    //dispatch(deleteCommentDB(postId, commentId1));
  };

  const comOpenModal = () => {
    SetCommentDetailMoreModal(true);
  };

  useEffect(() => {
    // 클릭한 게시물 ID와 같은 게시물의 인 경우
    dispatch(commentActions.getCommentApi(postId));
    console.log("postId : ", postId);
  }, [open]);

  

  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        {open ? (
          <>
            <Header>
            <AiOutlineClose 
            style={{ 
              color: "rgb(255, 255, 255)",
              fill: "rgb(255, 255, 255)",
              height: "18px",
              width: "18px",
              }} onClick={close}>
            </AiOutlineClose>
            </Header>
            <ModalArea>
              <LeftArea
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Img src={imageFile} />
              </LeftArea>
              <RightArea>
                <WriterInfo>
                  <Link to="/" style={{ marginLeft: "initial" }}>
                    <PostTitleImgArea>
                      <PostTitleImg src={imageSrc} alt="프로필 이미지" />
                    </PostTitleImgArea>
                  </Link>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      margin: "10px 2px 11px -36px",
                    }}
                  >
                    <PostTitle>{postNickname}</PostTitle>
                  </Link>
                  •<Follow>팔로우</Follow>
                  <div>
                    <MenuArea>
                      <>
                        <BsThreeDots
                          size="20"
                          style={{ width: "30px", cursor: "pointer" }}
                          //onClick={comOpenModal}
                        />
                      </>

                      {commentDetailMoreModal ? (
                        <CommentDetailMoreModal
                          data={props}
                        ></CommentDetailMoreModal>
                      ) : null}
                    </MenuArea>
                  </div>
                </WriterInfo>

                <ContentArea>
                  <Scroll>
                    <Contents>
                      <div
                        style={{
                          position: "relative",
                          paddingLeft: "50px",
                          paddingTop: "20px",
                        }}
                      >
                        <Link
                          to="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <PostTitle
                            style={{
                              marginBottom: "10px",
                              textDecoration: "none",
                              color: "black",
                            }}
                          >
                            {postNickname}
                          </PostTitle>
                        </Link>
                        <ModifiedAt>방금전</ModifiedAt>
                        <PostTitleImgArea
                          style={{
                            position: "absolute",
                            top: "-10px",
                            left: "-10px",
                          }}
                        >
                          <PostTitleImg src={imageSrc} alt="이미지" />
                        </PostTitleImgArea>
                      </div>
                      {commentsList?.map((c) => {
                        const commentId = c.commentId;
                        return (
                          <Comments key={c.commentId}>
                            <PostTitle>{c.nickname}</PostTitle>
                            <Commentna>
                              {c.contents &&
                                c.contents.split("\n").map((c, idx) => {
                                  return <div key={idx}>{c}</div>;
                                })}
                            </Commentna>

                            <CommentFooter>
                              <Link
                                to="/"
                                style={{
                                  textDecoration: "none",
                                }}
                              >
                                <ModifiedAt>방금전</ModifiedAt>
                              </Link>
                              <Like>좋아요 0개</Like>
                              <ReComment>답글 달기</ReComment>
                            </CommentFooter>
                            {c.nickname === loginUser.nickname ? (
                              <button
                                onClick={() => {
                                  commentDeleteClick(commentId);
                                }}
                              >
                                삭제
                              </button>
                            ) : null}

                            <PostTitleImgArea
                              style={{
                                position: "absolute",
                                top: "-20px",
                                left: "-10px",
                              }}
                            >
                              {(imageSrc && (
                                <PostTitleImg
                                  src={imageSrc}
                                  alt="프로필 사진"
                                />
                              )) || (
                                <PostTitleImg
                                  src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png"
                                  alt="프로필사진X"
                                />
                              )}
                            </PostTitleImgArea>
                            <ThreeDotsArea id="dots">
                              <BsThreeDots onClick={comOpenModal} />
                            </ThreeDotsArea>
                            <AiOutlineHeart
                              size="13"
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "10px",
                              }}
                            />
                          </Comments>
                        );
                      })}
                    </Contents>
                  </Scroll>
                </ContentArea>
                <RightFooter>
                  <FooterMenu>
                    {(like && (
                      <AiFillHeart
                        size="28"
                        style={{ margin: "8px", cursor: "pointer" }}
                        onClick={delLike}
                        color="red"
                      />
                    )) || (
                      <AiOutlineHeart
                        size="28"
                        style={{ margin: "8px", cursor: "pointer" }}
                        onClick={addLike}
                      />
                    )}

                    <Link to="/">
                      <IoChatbubbleOutline
                        size="28"
                        style={{
                          margin: "8px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link to="/direct">
                      <IoMdPaperPlane
                        size="28"
                        style={{
                          margin: "8px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      />
                    </Link>
                    <Link to="/">
                      <RiBookmarkLine
                        size="28"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "8px",
                          textDecoration: "none",
                          color: "black",
                        }}
                      />
                    </Link>

                    {/* {liked && <Liked>좋아요 {likeValue + delLiked}개</Liked>}
                    {liked || <Liked>좋아요 {likeValue + addLiked}개</Liked>} */}

                    <WriteComment>
                      <CgSmile
                        size="28"
                        style={{ margin: "0 16px", cursor: "pointer" }}
                      />
                      <Message
                        placeholder="댓글 달기..."
                        onChange={changeComment}
                      />
                      {hasComment !== "" ? (
                        <Commenting onClick={() => addComment(postId)}>
                          게시
                        </Commenting>
                      ) : (
                        <Commenting
                          style={{ opacity: "0.3", pointerEvents: "none" }}
                        >
                          게시
                        </Commenting>
                      )}
                    </WriteComment>
                  </FooterMenu>
                </RightFooter>
              </RightArea>
            </ModalArea>
          </>
        ) : null}
      </div>
    </>
  );
};

Comment.defaultProps = {
  postProfileUrl:
    "https://www.pngall.com/wp-content/uploads/5/Instagram-Logo-PNG-Image.png",
};

const ModalArea = styled.div`
  background-color: #fafafa;
  @media (min-width: 600px) {
    display: flex;
    box-sizing: border-box;
  }
  border-radius: 0.3rem;
  /* background-color: #fff; */
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
  z-index: 1000;
`;

const LeftArea = styled.div`
  width: 70%;
  max-width: 600px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 612px;
`;

const RightArea = styled.div`
  width: 30%;
  min-width: 344px;
`;

const WriterInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  position: relative;
`;

const PostTitleImgArea = styled.div`
  width: 39px;
  height: 39px;
  border: 2px solid transparent;
  border-radius: 100%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #f7d358, #f781be, #df01d7);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 16px;
  cursor: pointer;
`;

const PostTitleImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const PostTitle = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Follow = styled.div`
  margin-left: 5px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const MenuArea = styled.div`
  position: relative;
  right: -2px;
  cursor: pointer;
  margin: 19px 0px 10px 10px;
  z-index: 9999;
`;

const ContentArea = styled.div`
  display: flex;
`;

const Contents = styled.div`
  word-break: break-all;
`;

const ModifiedAt = styled.div`
  font-size: 10px;
  color: #999;
  padding: 20px 0 40px;
`;

const ThreeDotsArea = styled.span`
  position: absolute;
  top: 0;
  right: 30px;
  color: #fff;
  cursor: pointer;
`;

const Comments = styled.div`
  position: relative !important;
  padding-left: 50px;
  &:hover #dots {
    color: #000;
  }
`;

const Commentna = styled.div`
  margin-top: 5px;
`;

const CommentFooter = styled.div`
  display: inline-flex;
`;

const Like = styled.div`
  font-size: 10px;
  color: #777;
  padding: 20px 0 40px 10px;
`;

const ReComment = styled.div`
  font-size: 10px;
  color: #777;
  padding: 20px 0 40px 10px;
`;

const Scroll = styled.div`
  width: 330px;
  padding-top: 20px;
  max-height: 400px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

const RightFooter = styled.div``;

const FooterMenu = styled.div`
  padding: 8px;
  position: relative;
  bottom: 0;
`;

const WriteComment = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
`;

const Message = styled.textarea`
  width: 100%;
  height: 40%;
  max-height: 80px;
  outline: none;
  border: 0;
  font-size: 14px;
  resize: none;
  flex-grow: 1;
  flex-direction: column;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0 0 -7px 0;
`;

const Commenting = styled.div`
  width: 47px;
  color: rgba(var(--d69, 0, 149, 246), 1);
  cursor: pointer;
`;

const Liked = styled.div`
  margin: 5px 10px 10px;
  font-weight: 900;
  pointer-events: none;
`;

const ModalWrap = styled.div`
  height: 48px;
  border-bottom: 1px solid #999;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

const Header = styled.div`
  position: fixed; 
  left: 85%;
  right: 0; 
  top: 0; 
  height: 4rem; 
  line-height: 4rem; 
  text-align: center;
`;

export default CommentDetailViewModal;
