import { useState } from "react";
import Grid from "./../elements/Grid";
import Image from "../elements/Image";
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
    <Grid border={"1px solid #DBDBDB"} height={"60px"}>
      <Grid is_flex width={"940px"} margin={"14.5px auto"}>
        <Grid width={"103px"} margin={"0 0"}>
          <Image src={require("../static/smallLogo.png")} />
        </Grid>
        <Grid is_flex width={"254px"} height={"24px"} margin={"0 0"}>
          <PostBtn type={"Home"} />
          <PostBtn type={"Dm"} />
          <PostBtn type={"Add"} />
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
        </Grid>
      </Grid>
      <ProfileModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        modalClose={modalClose}
      />
    </Grid>
  );
};

export default Header;
