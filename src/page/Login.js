import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Grid, Image, Input, Button, Text } from "../elements/index";
import { AiFillFacebook } from "react-icons/ai";
import styled from "styled-components";
import Footer from "../components/Footer";

import { actionCreators as userActions } from "../redux/modules/user";
import { useNavigate } from "react-router";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [RandomPic, setRadomPic] = useState();

  const imgArray = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png",
  ];

  React.useEffect(() => {
    window.onload = showImage(RandomPic);
  }, []);

  function showImage() {
    const imgNum = Math.round(Math.random() * 4);
    setRadomPic(imgArray[imgNum]);
    setTimeout(showImage, 2000);
  }

  // ID , password 
  const [username, setUsername] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  // Error Msg
  // const [Message, setMessge] = React.useState("");

  // username 값 가져오기
  const userCheck = (e) => {
    const userCurrent = e.target.value;
    setUsername(userCurrent);
  }

  // pwd 값 가져오기
  const pwdCheck = (e) => {
    setPwd(e.target.value);
  } 

  //로그인 하기
  const loginClick = () => {
      console.log("1");
      dispatch(userActions.loginApi(username,pwd,navigate));
      console.log("2");
   }

  return (
    <React.Fragment>
      {/* phone이미지와 login 영역*/}
      <div
        bg={"#FAFAFA"}
      >

      <Grid
        is_flex
        className="layout"
        width="850px"
        height="900px"
        // border="5px solid red"
        margin="auto"
        //bg = {"#FAFAFA"}
      >
        <Grid className="phoneLayout">
          {/* Random으로 들어가는 phoneLayout */}
          <Image
            shape="rectangle"
            src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
            width="410px"
            height="620px"
            margin="70px 20px 0px 0px"
          />
          {/* RandomPic image */}
          <Image
            shape="rectangle"
            src={RandomPic}
            //src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
            width="250px"
            height="538px"
            margin="-600px 0px 0px 150px"
          />
        </Grid>

        <Grid width="380px" margin="auto" bg={"#fff"}>
          {/*Login 영역*/}
          <Grid
            margin="70px 0 10px 0"
            padding="auto"
            border="1px solid #dbdbdb"
            height="fit-content"
            width="370px"
          >
            {/* instagram Logo 이미지 */}
            <Image
              shape="rectangle"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              width="175px"
              height="51px"
              margin="50px 0  10px 90px"
            />
            {/* <Grid margin="0 0 10px 50px"> */}
            <Grid align="center">
              {/* username 입력 */}
              <Input
                mainInput
                placeholder="username"
                _onChange={userCheck}
              ></Input>
              {/* Password 입력 */}
              <Input
                mainInput
                password
                placeholder="password"
                _onChange={pwdCheck}
              ></Input>

              {/* Login Button */}
              <Button 
                mainButton text="로그인" 
                margin={"4px 54px"} 
                width={"260px"}  
                _onClick={loginClick}
                />

              {/*only view*/}
            </Grid>
            <Grid margin="0 0 13px 0" align="center">
              <Text color="#8e8e8e">또는</Text>
              <Grid
                is_flex
                color="#00376b"
                justify="center"
                margin="20px 0"
                cursor="pointer"
                _onClick={() => {
                  window.alert("준비 중 입니다.");
                }}
              ></Grid>
              <Grid is_flex justify="center" margin= "-25px 63px 23px 76px">
                <AiFillFacebook size="25"/>
                <Text>Facebook으로 로그인하기</Text>
              </Grid>

              <Grid
                size="12px"
                color="#00376b"
                cursor="pointer"
                _onClick={() => {
                  window.alert("준비 중 입니다.");
                }}
              >
                비밀번호를 잊으셨나요?
              </Grid>
            </Grid>
          </Grid>
          <Grid
            is_flex
            width="370px"
            height="74px"
            justify="center"
            // margin="0 0 10px"
            // padding="10px 0"
            border="1px solid #dbdbdb"
            margin= "0"
            bg={"#fff"}

          >
            <Text size="15px" margin="0 -77px 0 80px">
              계정이 없으신가요?
            </Text>
            <Text
              link
              _onClick={() => {
              //navigate("/signup",{replace:true})
              navigate("/signup")
              }}
            >
              가입하기
            </Text>
          </Grid>

          <Grid>
            <Text align="center" margin="16px">앱을 다운로드하세요.</Text>
            {/* 앱 다운로드 image */}
            <Grid is_flex width="370px">
              <Image
                shape="imgBtn"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                width="136px"
                height="40px"
                margin="0 0 0 40px"
                _onClick={() => {
                  window.location.href =
                    "https://apps.apple.com/app/instagram/id389801252?vt=lo";
                }}
              />
              <Image
                shape="imgBtn"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                width="136px"
                height="40px"
                margin="0 0 0 -70px"
                _onClick={() => {
                  window.location.href =
                    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=D1ACAFFB-6F51-4798-AE32-792EC2AC38EA&utm_content=lo&utm_medium=badge";
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {""}
      {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
};

const Span = styled.div`
  margin-top: 10px;
  text-align: center;
  color: red;
`;

export default LogIn;
