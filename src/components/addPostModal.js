import Modal from "react-modal";
import NGrid from "../elements/NGrid";
import NImage from "../elements/NImage";
import Textarea from "./../elements/Textarea";

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
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    width: "1200px",
    height: "900px",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    margin: "auto",
    padding: "0",
    zIndex: 10,
  },
};

const AddPostModal = (props) => {
  const { addPost, setAddPost, addPostClose } = props;
  return (
    <>
      <Modal isOpen={addPost} style={styles} onRequestClose={addPostClose}>
        <NGrid>
          <div
            style={{
              borderBottom: "1px solid #DBDBDB",
              width: "1198px",
              height: "45px",
              borderRadius: "14px 14px 0 0",
              textAlign: "center",
              lineHeight: "45px",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <p>새 게시물 만들기</p>
          </div>
          <NGrid is_flex>
            <div
              style={{
                width: "860px",
                height: "852px",
                margin: "0 0 0 0",
                borderRight: "1px solid #DBDBDB",
              }}
            ></div>
            <div
              style={{
                width: "338px",
                height: "276px",
                borderBottom: "1px solid #DBDBDB",
                margin: "-580px 0 0 0",
              }}
            >
              <NGrid is_flex width="338px" height="55px" margin="0 0 0 0">
                <NImage
                  src={require("../static/IU.jpg")}
                  width="30px"
                  height="30px"
                  margin="0 0 0 15px"
                  type="circle"
                />
                <p style={{ margin: "0 230px 0 0" }}>닉네임</p>
              </NGrid>
              <Textarea width="338px" height="220px"></Textarea>
            </div>
          </NGrid>
        </NGrid>
      </Modal>
    </>
  );
};

export default AddPostModal;
