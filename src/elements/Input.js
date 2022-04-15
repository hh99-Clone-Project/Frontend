import React from "react";
import styled from "styled-components";

const Input = () => {
  return <MainInput></MainInput>;
};

const MainInput = styled.input`
  width: 260px;
  height: 32px;
  margin: 50px auto;
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  background-color: #fafafa;
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
