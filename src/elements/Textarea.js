import React from "react";
import styled from "styled-components";

const Textarea = (props) => {
  const { width, height } = props;
  const styles = { width, height };
  return <Textinput {...styles} placeholder="문구 입력..."></Textinput>;
};

Textarea.defaultProps = {
  height: "100%",
  width: "100%",
};

const Textinput = styled.textarea`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  resize: none;
  padding: 15px;
  font-size: 16px;
  letter-spacing: normal;
  word-spacing: normal;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default Textarea;
