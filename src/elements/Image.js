import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, width, height, margin, type } = props;
  const styles = { width, height, margin };

  if (type == "circle") {
    return <CircleImg src={src} {...styles}></CircleImg>;
  }
  return <Img src={src} {...styles}></Img>;
};

const Img = styled.img`
  ${(props) => (props.width ? `color: ${props.width};` : null)}
  ${(props) => (props.height ? `color: ${props.height};` : null)}
`;

const CircleImg = styled.img`
  ${(props) => (props.height ? `color: ${props.height};` : null)}
  ${(props) => (props.width ? `color: ${props.width};` : null)}
    ${(props) => (props.margin ? `margin: ${props.margin};` : null)}

  border-radius: 100%;
  object-fit: cover;
`;

export default Image;
