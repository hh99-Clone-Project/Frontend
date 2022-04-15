import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, width, height } = props;
  const styles = { width, height };
  return (
    <ElButton onClick={onClick} {...styles}>
      버튼
    </ElButton>
  );
};

Button.defaultProps = {
  width: "270px",
  height: "30px",
  lineHeight: "30px",
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

export default Button;
