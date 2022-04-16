import { useState } from "react";
import NGrid from "../elements/NGrid";
import Image from "../elements/NImage";
import PostBtn from "../elements/PostBtn";
import ProfileModal from "./ProfileModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };
  return (
    <NGrid border={"1px solid #DBDBDB"} height={"60px"}>
      <NGrid is_flex width={"940px"} margin={"14.5px auto"}>
        <NGrid width={"103px"} margin={"0 0"}>
          <Image src={require("../static/smallLogo.png")} />
        </NGrid>
        <NGrid is_flex width={"254px"} height={"24px"} margin={"0 0"}>
          <PostBtn type={"Home"} />
          <PostBtn type={"Dm"} />
          <PostBtn type={"Post"} />
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
      <ProfileModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        modalClose={modalClose}
      />
    </NGrid>
  );
};

export default Header;
