import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { margin } = props;
  const styles = { margin };
  return <MainInput {...styles}></MainInput>;
};

const MainInput = styled.input`
  width: 260px;
  height: 32px;
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  background-color: #fafafa;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  &:focus {
    outline: none;
  }
`;

const ElInput = styled.input`
  border: 1px solid #87cefa;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  margin: ${(props) => props.margin};
`;

export default Input;
