import React from "react";
import Grid from "./../elements/Grid";
import Image from "../elements/Image";
import HeaderBtn from "../elements/HeaderBtn";
import PostBtn from "../elements/PostBtn";

const Header = () => {
  return (
    <Grid border={"1px solid #DBDBDB"} height={"60px"}>
      <Grid is_flex width={"940px"} margin={"14.5px auto"}>
        <Grid width={"103px"} margin={"0 0"}>
          <Image src={require("../static/smallLogo.png")} />
        </Grid>
        <Grid is_flex width={"254px"} height={"24px"} margin={"0 0"}>
          <HeaderBtn />
          <PostBtn type={"Dm"} />
          <HeaderBtn type={"Post"} />
          <HeaderBtn type={"Map"} />
          <PostBtn type={"Heart"} />
          <Image
            type={"circle"}
            width={"24px"}
            height={"24px"}
            src={require("../static/IU.jpg")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
