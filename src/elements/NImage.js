import React from "react";
import styled from "styled-components";

const NImage = (props) => {
  const {
    src,
    width,
    height,
    margin,
    type,
    borderTop,
    borderBottom,
    onClick,
    onChange,
  } = props;
  const styles = { width, height, margin, borderTop, borderBottom };

  if (type === "circle") {
    return <CircleImg onClick={onClick} src={src} {...styles}></CircleImg>;
  }
  return <Img onChange={onChange} src={src} {...styles}></Img>;
};

Image.defaultProps = {
  borderTop: false,
  borderBottom: false,
};

const Img = styled.img`
  ${(props) => (props.width ? `width: ${props.width};` : null)}
  ${(props) => (props.height ? `height: ${props.height};` : null)}
  ${(props) => (props.borderTop ? `border-top: 1px solid #DBDBDB;` : null)}
  ${(props) =>
    props.borderBottom ? `border-bottom: 1px solid #DBDBDB;` : null}
  object-fit: scale-down;
`;

const CircleImg = styled.img`
  ${(props) => (props.height ? `color: ${props.height};` : null)}
  ${(props) => (props.width ? `color: ${props.width};` : null)}
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  border-radius: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export default NImage;
