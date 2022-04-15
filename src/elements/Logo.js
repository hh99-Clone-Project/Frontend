import React from "react";
import styled from "styled-components";

const Logo = (props) => {
  const { src, width, height } = props;
  const styles = { width, height };
  return <Img src={src} {...styles}></Img>;
};

const Img = styled.img`
  ${(props) => (props.width ? `color: ${props.width};` : null)}
  ${(props) => (props.height ? `color: ${props.height};` : null)}
`;

export default Logo;
