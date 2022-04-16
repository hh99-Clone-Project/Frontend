import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    onClick,
    width,
    height,
    text,
    _onClick,
    children,
    margin,
    padding,
    disabled,
    radius,
    bgColor,
    opacity,
    color,
    className,
    mainButton,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    disabled: disabled,
    radius: radius,
    bgColor: bgColor,
    opacity: opacity,
    color: color,
    className: className,
  };
  if (mainButton) {
    return (
      <React.Fragment>
        <MainButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MainButton>
      </React.Fragment>
    );
  }

  return (
    <ElButton onClick={onClick} {...styles}>
      {text ? text : children}
    </ElButton>
  );
};

Button.defaultProps = {
  width: "270px",
  height: "30px",
  lineHeight: "30px",
  mainButton: false,
};

const ElButton = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  background-color: #0095f6;
  color: #ffffff;
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;

//로그인, 회원가입화면 버튼
const MainButton = styled.div`
  background-color: #b2dffc;
  color: #ffffff;
  font-size: 14px;
  margin: 15px 40px;
  padding: 5px 9px;
  width: 268px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  justify-content: center;
  display: flex;
  line-height: 1.5;
  cursor: pointer;
`;
export default Button;
