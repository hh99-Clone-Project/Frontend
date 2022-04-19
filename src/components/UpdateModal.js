import Modal from "react-modal";
import NGrid from "../elements/NGrid";
import NImage from "../elements/NImage";
import Textarea from "../elements/Textarea";
import { useDispatch } from "react-redux";
import { updateDB } from "./../redux/modules/post";
import { useState } from "react";

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

const UpdateModal = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const [_contents, set_Contents] = useState();
  const { isOpen, setIsOpen } = props;
  const {
    commentCnt,
    content,
    dayBefore,
    imageFile,
    likestatus,
    nickname,
    postId,
  } = props.data;

  const updatePost = () => {
    dispatch(
      updateDB({
        postId: postId,
        contents: _contents,
      })
    );
    setIsOpen(false);
  };

  const updateContents = (e) => {
    set_Contents(e.target.value);
    console.log(_contents);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={styles}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
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
            <NGrid is_flex margin="0 0 0 533px" width="665px">
              <p style={{ margin: "0" }}>게시물 수정</p>
              <span
                onClick={updatePost}
                style={{
                  color: "#0095F6",
                  margin: "0 10px 0 0",
                  cursor: "pointer",
                }}
              >
                수정하기
              </span>
            </NGrid>
          </div>
          <NGrid is_flex>
            <label
              style={{
                width: "860px",
                height: "852px",
                margin: "0 0 0 0",
                borderRight: "1px solid #DBDBDB",
              }}
            >
              <NImage height="99%" width="98%" src={imageFile} margin="auto" />
            </label>

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
                <p
                  style={{
                    width: "285px",
                    margin: "0",
                  }}
                >
                  {nickname}
                </p>
              </NGrid>
              <Textarea
                width="338px"
                height="220px"
                onChange={updateContents}
                defaultValue={content}
              ></Textarea>
            </div>
          </NGrid>
        </NGrid>
      </Modal>
    </>
  );
};

export default UpdateModal;
