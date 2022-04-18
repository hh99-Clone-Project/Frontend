import React from "react";
import styled from "styled-components";

const NInput = (props) => {
  const { border, margin, placehorder, type, Display, onChange, shape, name } =
    props;
  const styles = { margin, border, Display };

  if (shape === "textarea") {
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
      name={name}
      type={type}
      placeholder={placehorder}
      {...styles}
      onChange={onChange}
    ></MainInput>
  );
};

NInput.defaultProps = {
  border: "1px solid lightgray",
  Display: false,
};

const MainInput = styled.input`
  width: 260px;
  height: 37px;
  border: ${(props) => props.border};
  padding: 0 0 0 5px;
  border-radius: 1px;
  background-color: #fafafa;
  font-size: 12px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.Display ? `display: none;` : null)}
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

export default NInput;
