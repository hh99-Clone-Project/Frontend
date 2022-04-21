import React from "react";
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

const CommentDetaillMoreModal = (props) => {
  const { close } = props;
  console.log("MoreModal  : ", props);

  return (
    <div className="openModal modal">
      <button className="close" onClick={close}>
        close
      </button>
      <section>
        <main>{props.children}</main>
        <footer></footer>
      </section>

      {/* <ModalWrap
              style={{ 
                color: "red", 
                fontWeight: "900",
                
              }}
            >
             신고
            </ModalWrap>

            <ModalWrap
              style={{ color: "red", fontWeight: "900" }}>
                팔로우
            </ModalWrap>

            <ModalWrap>공유대상...</ModalWrap>
            <ModalWrap>링크 복사</ModalWrap>
            <ModalWrap>퍼가기</ModalWrap>
            <ModalWrap
              onClick={close}
              style={{ border: "none"}}
            >
              취소
            </ModalWrap> */}

      {/* <Modal
        commentDetailView={CommentDetailMoreModal}
        style={{zIndex:9999}}
        // onRequestClose={() => {
        //   setCommentDetailView(false);
        // }}
      >
        
      </Modal> */}
    </div>
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
  z-index: 9999;
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
  z-index: 9999;
`;

export default CommentDetaillMoreModal;
