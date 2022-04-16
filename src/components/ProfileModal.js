import Modal from "react-modal";
import styled from "styled-components";
import PostBtn from "../elements/PostBtn";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
    zIndex: 10,
  },

  content: {
    left: 775,
    top: 55,
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "5px",
    outline: "none",
    width: "230px",
    height: "200px",
    padding: "0",
    boxSizing: "borderBox",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    border: "none",
    zIndex: 10,
  },
};

const ProfileModal = (props) => {
  const { isOpen, modalClose } = props;
  return (
    <Modal isOpen={isOpen} style={styles} onRequestClose={modalClose}>
      <DescBox>
        <PostBtn type={"Profile"} /> <p>프로필</p>
      </DescBox>
      <DescBox>
        <PostBtn type={"SmallMark"} />
        <p>저장됨</p>
      </DescBox>
      <DescBox>
        <PostBtn type={"Option"} />
        <p>설정</p>
      </DescBox>
      <DescBox>
        <PostBtn type={"Change"} />
        <p>계정전환</p>
      </DescBox>
      <DescBox style={{ borderTop: "1px solid #DBDBDB" }}>
        <p style={{ margin: "0" }}>로그아웃</p>
      </DescBox>
    </Modal>
  );
};

const DescBox = styled.div`
  width: 100%;
  height: 39.4px;
  line-height: 39.4px;
  box-sizing: border-box;
  padding: 0 0 0 15px;
  color: #262626;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
  p {
    margin: 0 0 0 10px;
  }
`;

export default ProfileModal;
