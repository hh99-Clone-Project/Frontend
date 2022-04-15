import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { margin, placehorder, type, onChange } = props;
  const styles = { margin };
  return (
    <MainInput
      type={type}
      placeholder={placehorder}
      {...styles}
      onChange={onChange}
    ></MainInput>
  );
};

const MainInput = styled.input`
  width: 260px;
  height: 37px;
  border: 1px solid lightgray;
  padding: 0 0 0 5px;
  border-radius: 1px;
  background-color: #fafafa;
  font-size: 12px;
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
