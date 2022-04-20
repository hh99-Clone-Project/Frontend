import { useState, useEffect } from "react";
import NGrid from "../elements/NGrid";
import Image from "../elements/NImage";
import PostBtn from "../elements/PostBtn";
import ProfileModal from "./ProfileModal";
import AddPostModal from "./AddPostModal";
import DMmodal from "../components/DMmodal";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [dmOpen, setDmOpen] = useState(false);
  const token = localStorage.getItem("token");
  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  const addPostOpen = () => {
    setAddPost(true);
  };

  const dmModalOpen = () => {
    setDmOpen(true);
  };
  /* 로그인 유지-tspark20220418 */
  useEffect(() => {
    dispatch(userActions.loginCheckApi(token));
  }, [token]);

  return (
    <NGrid border={"1px solid #DBDBDB"} height={"60px"}>
      <NGrid is_flex width={"940px"} margin={"14.5px auto"}>
        <NGrid width={"103px"} margin={"0 0"}>
          <Image src={require("../static/smallLogo.png")} />
        </NGrid>
        <NGrid is_flex width={"254px"} height={"24px"} margin={"0 0"}>
          <PostBtn type={"Home"} />
          <PostBtn onClick={dmModalOpen} type={"Dm"} />
          <PostBtn onClick={addPostOpen} type={"Add"} />
          <PostBtn type={"Map"} />
          <PostBtn type={"Heart"} />
          <Image
            type={"circle"}
            width={"24px"}
            height={"24px"}
            src={require("../static/IU.jpg")}
            onClick={modalOpen}
            setIsOpen={setIsOpen}
          />
        </NGrid>
      </NGrid>
      {isOpen ? (
        <ProfileModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          modalClose={modalClose}
        />
      ) : null}
      {addPost ? (
        <AddPostModal setAddPost={setAddPost} addPost={addPost} />
      ) : null}
      <DMmodal dmOpen={dmOpen} setDmOpen={setDmOpen} />
    </NGrid>
  );
};

export default Header;
