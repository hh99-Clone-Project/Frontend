import React from "react";
import Grid from "../elements/Grid";
import Input from "./../elements/Input";

const LogIn = () => {
  return (
    <Grid
      margin={"auto"}
      border={"1px solid lightgray"}
      height={"396px"}
      width={"350px"}
    >
      <Grid height={"50px"} border={"1px solid black"}>
        <Input />
        <Input />
      </Grid>
    </Grid>
  );
};

export default LogIn;
