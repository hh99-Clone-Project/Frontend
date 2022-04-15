import Modal from "react-modal";

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
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "5px",
    outline: "none",
    width: "230px",
    height: "195px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px,rgba(0, 0, 0, 0.23) 0px 3px 6px",
    zIndex: 10,
  },
};

const ProfileModal = () => {
  return <Modal isOpen={true} style={styles}></Modal>;
};

export default ProfileModal;
