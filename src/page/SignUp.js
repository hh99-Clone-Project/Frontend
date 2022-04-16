import { useState } from "react";
import NGrid from "../elements/NGrid";
import Input from "../elements/NInput";
import Image from "../elements/NImage";
import Button from "../elements/NButton";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const SignUp = () => {
  // const [inputs, setInputs] = useState({
  //   id: "",
  //   nickname: "",
  //   pw:""
  // })

  // const { id, nickname, pw } = inputs;
  // const onChange = e => {
  //   setInputs({})
  // }

  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [pw, setPw] = useState();

  const dispatch = useDispatch();
  const changeId = (e) => {
    setId(e.target.value);
  };
  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const changePw = (e) => {
    setPw(e.target.value);
  };
  const signUp = () => {
    const userData = {
      username: id,
      nickname: nickname,
      password: pw,
    };
    dispatch(userActions.signUpDB(userData));
  };

  return (
    <NGrid height={"100vh"} border={"1px solid #FAFAFA"} bg={"#FAFAFA"}>
      <NGrid
        margin={"250px auto 0 auto"}
        border={"1px solid #DBDBDB"}
        height={"500px"}
        width={"350px"}
        bg={"#ffffff"}
      >
        <NGrid width={"175px"} margin={"0 auto"} padding={"40px 0 10px 0"}>
          <Image src={require("../static/logo.png")}></Image>
        </NGrid>
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
        <NGrid width={"270px"} is_flex margin={"20px auto 10px auto"}>
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
        </NGrid>
        <NGrid padding={"5px 0 0 0"} width={"262px"} height={"197px"}>
          <Input
            margin={"5px auto"}
            onChange={changeId}
            placehorder={"아이디"}
          />
          <Input
            margin={"0px auto"}
            onChange={changeNickname}
            placehorder={"닉네임"}
          />
          <Input
            margin={"5px auto"}
            onChange={changePw}
            placehorder={"비밀번호"}
            type={"password"}
          />
          <Input
            margin={"0px auto"}
            placehorder={"비밀번호 확인"}
            type={"password"}
          />
        </NGrid>
        <Button onClick={signUp} margin={"-10px auto"}>
          가입
        </Button>
      </NGrid>
      <NGrid>
        <NGrid
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
        </NGrid>
      </NGrid>
      <NGrid width={"350px"} height={"100px"}>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            margin: "20px auto",
          }}
        >
          앱을 다운로드하세요.
        </p>
        <NGrid is_flex width={"280px"}>
          <Image
            width={"135px"}
            height={"40px"}
            src={require("../static/Appstore.png")}
          />
          <Image
            width={"135px"}
            height={"40px"}
            src={require("../static/playStore.png")}
          />
        </NGrid>
      </NGrid>
    </NGrid>
  );
};

export default SignUp;
