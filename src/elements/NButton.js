import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { onClick, width, height, margin, children } = props;
  const styles = { width, height, margin };
  return (
    <ElButton onClick={onClick} {...styles}>
      {props.children}
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
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

export default Button;
