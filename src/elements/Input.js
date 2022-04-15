import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { border, margin, placehorder, type, onChange, shape } = props;
  const styles = { margin, border };

  if (shape == "textarea") {
    return (
      <Textarea
        placeholder={placehorder}
        {...styles}
        onChange={onChange}
      ></Textarea>
    );
  }

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

const Textarea = styled.textarea`
  width: 514px;
  height: 18px;
  resize: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.border ? `border: ${props.border};` : null)}
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
