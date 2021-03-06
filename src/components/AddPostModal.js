import Modal from "react-modal";
import NGrid from "../elements/NGrid";
import NImage from "../elements/NImage";
import Textarea from "./../elements/Textarea";
import PostBtn from "../elements/PostBtn";
import NInput from "../elements/NInput";
import { addPostDB } from "../redux/modules/post";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  const userInfo = useSelector((state) => state.user.userInfo);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { addPost, setAddPost } = props;
  const [content, setContent] = useState(null);
  const [preImg, setPreImg] = useState();
  const [uploadImg, setUploadImg] = useState();

  const addContent = (e) => {
    setContent(e.target.value);
  };

  const upload = () => {
    const data = {
      image: uploadImg,
      contents: content,
    };
    dispatch(addPostDB(data, token));
      setAddPost(false);
      setPreImg(null);
  };

  const setPreview = (e) => {
    const file = e.target.files[0];
    setUploadImg(file);
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreImg(reader.result);
    };
  };

  return (
    <>
      <Modal
        isOpen={addPost}
        style={styles}
        onRequestClose={() => {
          setAddPost(false);
          setPreImg(null);
          setContent(null);
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
              <p style={{ margin: "0" }}>??? ????????? ????????? </p>
              <span
                onClick={upload}
                style={{
                  color: "#0095F6",
                  margin: "0 10px 0 0",
                  cursor: "pointer",
                  visibility: content && preImg ? "visible" : "hidden",
                }}
              >
                ????????????
              </span>
            </NGrid>
          </div>
          <NGrid is_flex>
            {preImg ? (
              <label
                style={{
                  width: "860px",
                  height: "852px",
                  margin: "0 0 0 0",
                  borderRight: "1px solid #DBDBDB",
                }}
              >
                <NImage width="98%" src={preImg} />
              </label>
            ) : (
              <label
                style={{
                  width: "860px",
                  height: "852px",
                  margin: "0 0 0 0",
                  borderRight: "1px solid #DBDBDB",
                }}
              >
                <NGrid width="96px" margin="358px auto">
                  <PostBtn type="Upload" />
                  <NInput
                    type="file"
                    border="none"
                    Display
                    onChange={setPreview}
                  />
                  <p
                    style={{
                      width: "290px",
                      fontWeight: "300",
                      fontSize: "22px",
                      margin: "0 0 0 -97px",
                    }}
                  >
                    ???????????? ????????? ???????????????!
                  </p>
                </NGrid>
              </label>
            )}

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
                  src={userInfo.profileImg}
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
                  {userInfo.nickname}
                </p>
              </NGrid>
              <Textarea
                onChange={addContent}
                width="338px"
                height="220px"
              ></Textarea>
            </div>
          </NGrid>
        </NGrid>
      </Modal>
    </>
  );
};

export default AddPostModal;
