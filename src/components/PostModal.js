import Modal from "react-modal";
import styled from "styled-components";
import { deleteDB } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

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

const PostModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, setIsOpen, setDetail } = props;

  const detailOpen = () => {
    setIsOpen(false);
    setDetail(true);
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
        <OptionBox onClick={detailOpen}>
          <p
            style={{
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "14px",
            }}
          >
            수정
          </p>
        </OptionBox>
        <OptionBox>
          <p
            onClick={() => {
              dispatch(deleteDB(props.data));
              window.location.reload();
            }}
            style={{
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "14px",
              color: "#EF5E6A",
            }}
          >
            삭제
          </p>
        </OptionBox>
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
`;
export default PostModal;
