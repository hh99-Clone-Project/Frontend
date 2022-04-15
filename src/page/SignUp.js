import React from "react";
import Grid from "../elements/Grid";
import Input from "./../elements/Input";
import Logo from "../elements/Logo";
import Button from "./../elements/Button";

const SignUp = () => {
  return (
    <Grid height={"100vh"} border={"1px solid #FAFAFA"} bg={"#FAFAFA"}>
      <Grid
        margin={"250px auto 0 auto"}
        border={"1px solid #DBDBDB"}
        height={"500px"}
        width={"350px"}
        bg={"#ffffff"}
      >
        <Grid width={"175px"} margin={"0 auto"} padding={"40px 0 10px 0"}>
          <Logo src={require("../static/logo.png")}></Logo>
        </Grid>
        <h2
          style={{
            width: "268px",
            fontSize: "17px",
            fontWeight: "600",
            textAlign: "center",
            color: "#959AA4",
          }}
        >
          친구들의 사진과 동영상을 보려면 가입하세요.
        </h2>
        <Button margin={"20px auto 10px auto"}>Facebook으로 로그인</Button>
        <Grid width={"270px"} is_flex margin={"20px auto 10px auto"}>
          <div
            style={{
              backgroundColor: "rgba(var(--b38,219,219,219),1)",
              height: "1px",
              width: "100px",
            }}
          ></div>
          <span style={{ fontSize: "13px" }}>또는</span>
          <div
            style={{
              backgroundColor: "rgba(var(--b38,219,219,219),1)",
              height: "1px",
              width: "100px",
            }}
          ></div>
        </Grid>
        <Grid padding={"5px 0 0 0"} width={"262px"} height={"197px"}>
          <Input
            margin={"5px auto"}
            placehorder={"휴대폰 번호 또는 이메일 주소"}
          />
          <Input margin={"0px auto"} placehorder={"성명"} />
          <Input margin={"5px auto"} placehorder={"사용자 이름"} />
          <Input
            margin={"0px auto"}
            placehorder={"비밀번호"}
            type={"password"}
          />
        </Grid>
        <Button margin={"-10px auto"}>가입</Button>
      </Grid>
      <Grid>
        <Grid
          bg={"#ffffff"}
          margin={"10px auto"}
          border={"1px solid lightgray"}
          height={"70px"}
          width={"350px"}
          line_height={"70px"}
        >
          <p style={{ textAlign: "center", fontSize: "13px" }}>
            계정이 있으신가요?{` `}
            <a
              href="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#0095F6",
              }}
            >
              로그인
            </a>
          </p>
        </Grid>
      </Grid>
      <Grid width={"350px"} height={"100px"}>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            margin: "20px auto",
          }}
        >
          앱을 다운로드하세요.
        </p>
        <Grid is_flex width={"280px"}>
          <Logo
            width={"135px"}
            height={"40px"}
            src={require("../static/Appstore.png")}
          />
          <Logo
            width={"135px"}
            height={"40px"}
            src={require("../static/playStore.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
