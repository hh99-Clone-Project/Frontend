import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    margin,
    height,
    width,
    padding,
    _value,
    mainInput,
    // password,
  } = props;

  if (mainInput) {
    return (
      <React.Fragment>
        <MainInput
          type={type}
          onChange={_onChange}
          placeholder={placeholder}
          margin={margin}
          padding={padding}
        ></MainInput>
      </React.Fragment>
    );
  }

  return <MainInput placeholder={placeholder}></MainInput>;
};

Input.defaultProps = {
  type: 'text',
}

const MainInput = styled.input`
  margin: ${(props) => props.margin};
  padding: ${(props)=> props.padding};
  text-overflow: ellipsis;
  width: 260px;
  height: 32px;
  //margin: 10px auto;
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
