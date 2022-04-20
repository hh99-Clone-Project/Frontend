import Modal from "react-modal";
import styled from "styled-components";
import NGrid from "./../elements/NGrid";

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
    width: "935px",
    height: "1100px",
    padding: "0",
    boxSizing: "borderBox",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    border: "none",
    zIndex: 10,
    margin: "auto",
  },
};

const PostModal = (props) => {
  const { dmOpen, setDmOpen } = props;

  return (
    <>
      <Modal
        isOpen={dmOpen}
        style={styles}
        onRequestClose={() => {
          setDmOpen(false);
        }}
      >
        <div
          style={{
            borderBottom: "1px solid #DBDBDB",
            height: "60px",
            lineHeight: "60px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          DM
        </div>
        <div
          style={{
            border: "1px solid #dbdbdb",
            borderRadius:'10px',
            height: "905px",
            margin: "30px auto 0 auto",
            width: "90%",
          }}
        ></div>
        <NGrid width="935px" margin="30px 0 0 0">
          <TextBox></TextBox>
        </NGrid>
      </Modal>
    </>
  );
};

const TextBox = styled.textarea`
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  height: 45px;
  width: 860px;
  resize: none;
  margin: auto 35px;
  padding: 10px;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
export default PostModal;
