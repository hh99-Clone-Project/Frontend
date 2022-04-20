import { useState, useCallback } from "react";
import NGrid from "../elements/NGrid";
import NInput from "../elements/NInput";
import Image from "../elements/NImage";
import Button from "../elements/NButton";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import _ from "lodash";
import NImage from "../elements/NImage";
import { useNavigate } from "react-router";
import { normalizeUnits } from "moment";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dup, setDup] = useState(null);
  const [id, setId] = useState();
  const [files, setFiles] = useState({
    preImg: "",
    upImg: "",
  });
  const [inputs, setInputs] = useState({
    nickname: "",
    pw: "",
    pwCheck: "",
  });
  const { nickname, pw, pwCheck } = inputs;
  const upFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFiles({ upImg: file, preImg: reader.result });
    };
  };

  const onChange = (e) => {
    console.log("이건 바로바로");
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeId = (e) => {
    setId(e.target.value);
    checkDup(id);
  };

  const checkDup = useCallback(
    _.debounce((id) => {
      console.log(id);
      dispatch(userActions.checkDupDB(id, setDup));
    }, 2000),
    []
  );

  const signUp = () => {
    if (!id) {
      return alert("아이디를 입력해주세요");
    }
    if (!nickname) {
      return alert("닉네임을 입력해주세요");
    }
    if (!pw) {
      return alert("비밀번호를 입력해주세요");
    }
    if (pw !== pwCheck) {
      return alert("비밀번호가 다릅니다. 확인해주세요");
    }
    if (!files.upImg) {
      return alert("프로필 사진을 올려주세요.");
    }
    const userData = {
      image: files.upImg,
      username: id,
      nickname: nickname,
      password: pw,
    };
    dispatch(userActions.signUpDB(userData));
    navigate("/", { replace: true });
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
            onChange={onChangeId}
            placehorder={"아이디"}
          />
          {dup ? null : (
            <div
              style={{
                width: "37px",
                height: "37px",
                margin: "-42px 0 5px 223px",
                zIndex: "10",
                position: "relative",
                fontSize: "25px",
              }}
            >
              ❌
            </div>
          )}
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
            name="pwCheck"
            margin={"0px auto"}
            onChange={onChange}
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
        {dup ? (
          <Button onClick={signUp} margin={"30px auto"}>
            가입
          </Button>
        ) : (
          <div
            style={{
              width: "270px",
              height: "30px",
              lineHeight: "30px",
              color: "#ffffff",
              textAlign: "center",
              backgroundColor: "#B2DFFC",
              border: "none",
              borderRadius: "0.4rem",
              margin: "30px auto",
            }}
          >
            가입
          </div>
        )}
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
