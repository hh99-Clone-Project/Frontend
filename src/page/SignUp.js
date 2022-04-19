import { useState } from "react";
import NGrid from "../elements/NGrid";
import NInput from "../elements/NInput";
import Image from "../elements/NImage";
import Button from "../elements/NButton";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import _ from "lodash";
import NImage from "../elements/NImage";

const SignUp = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState({
    preImg: "",
    upImg: "",
  });
  const [inputs, setInputs] = useState({
    id: "",
    nickname: "",
    pw: "",
  });

  const upFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFiles({ upImg: file, preImg: reader.result });
    };
  };

  const { id, nickname, pw } = inputs;
  const onChange = (e) => {
    console.log("이건 바로바로");
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    checkDup(id);
  };

  const checkDup = _.throttle((id) => {
    console.log("스로틀");
    // dispatch(userActions.checkDupDB(id));
  }, 10000);

  const signUp = () => {
    const userData = {
      image: files.upImg,
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
        height={"530px"}
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
          <NInput
            name="id"
            margin={"5px auto"}
            onChange={checkDup}
            placehorder={"아이디"}
          />
          <NInput
            name="nickname"
            margin={"0px auto"}
            onChange={onChange}
            placehorder={"닉네임"}
          />
          <NInput
            name="pw"
            margin={"5px auto"}
            onChange={onChange}
            placehorder={"비밀번호"}
            type={"password"}
          />
          <NInput
            margin={"0px auto"}
            placehorder={"비밀번호 확인"}
            type={"password"}
          />
          <NGrid is_flex width="260px" height="38px" margin="10px 0 0 0">
            <NImage
              src={files.preImg ? files.preImg : require("../static/logo.png")}
              type="circle"
              width="35px"
              height="35px"
              margin="0 7px"
            />
            <label
              style={{
                color: "#0095F6",
                height: "38px",
                lineHeight: "38px",
                cursor: "pointer",
              }}
            >
              <NInput
                Display
                border="none"
                bgColor="none"
                margin={"5px auto"}
                type={"file"}
                onChange={upFile}
              />
              클릭하여 프로필 사진을 선택
            </label>
          </NGrid>
        </NGrid>
        <Button onClick={signUp} margin={"30px auto"}>
          가입
        </Button>
      </NGrid>
      <NGrid>
        <NGrid
          bg={"#ffffff"}
          margin={"7px auto"}
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
