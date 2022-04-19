import Modal from "react-modal";
import styled from "styled-components";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(00,00,00, 0.9)",
    zIndex: 10,
  },

  content: {
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "10px",
    outline: "none",
    width: "400px",
    height: "100px",
    padding: "0",
    boxSizing: "borderBox",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    border: "none",
    zIndex: 10,
    margin: "auto",
  },
};

const CommentDetaillModal = (props) => {
  const { commentDetailView, setCommentDetailView, setCommentDetailMoreModal } = props;

  const commentDetailOpen = () => {
    setCommentDetailView(true);  // 댓글조회 modal 관리 
    setCommentDetailMoreModal(false);   // 댓글조회에서 더보기 버튼 modal 관리
  };
  return (
    <>
      <Modal
        commentDetailView={commentDetailView}
        style={styles}
        onRequestClose={() => {
          setCommentDetailView(false);
        }}
      >
        <OptionBox>
          <p
            style={{
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "14px",
              color: "#EF5E6A",
            }}
          >
            신고
          </p>
        </OptionBox>

        <OptionBox>
          <p
            style={{
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "14px",
              color: "#EF5E6A",
            }}
          >
            팔로우
          </p>
        </OptionBox>

        <ModalWrap>공유대상...</ModalWrap>
        <ModalWrap>링크 복사</ModalWrap>
        <ModalWrap>퍼가기</ModalWrap>
        <ModalWrap 
            onRequestClose={() => {
              setCommentDetailView(false)}}
            style={{border:"none"}}    
        >취소
        </ModalWrap>
      </Modal>
    </>
  );
};

const OptionBox = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 400px;
  height: 50px;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
  z-index:9999;
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
  z-index:9999;
`;


export default CommentDetaillModal;
