import React from "react";
import styled from "styled-components";

const HeaderBtn = (props) => {
  const { type } = props;

  if (type == "Map") {
    return (
      <MapBtn fill={"#262626"} role={"img"} viewBox={"0 0 24 24"}>
        <polygon
          fill={"none"}
          points={
            "13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
          }
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        />
        <polygon
          fillRule={"evenodd"}
          points={"10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"}
        />
        <circle
          cx={"12.001"}
          cy={"12.005"}
          fill={"none"}
          r={"10.5"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        />
      </MapBtn>
    );
  }
  if (type == "Post") {
    return (
      <PostBtn fill={"#262626"} role={"img"} viewBox={"0 0 24 24"}>
        <path
          d={
            "M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
          }
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        />
        <line
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
          x1={"6.545"}
          x2={"17.455"}
          y1={"12.001"}
          y2={"12.001"}
        />
        <line
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
          x1={"12.003"}
          x2={"12.003"}
          y1={"6.545"}
          y2={"17.455"}
        />
      </PostBtn>
    );
  }
  return (
    <HomeBtn fill={"#262626"} role={"img"} viewBox={"0 0 24 24"}>
      <path
        d={
          'M 22 23 h -6.001 a 1 1 0 0 1 -1 -1 v -5.455 a 2.997 2.997 0 1 0 -5.993 0 V 22 a 1 1 0 0 1 -1 1 H 2 a 1 1 0 0 1 -1 -1 V 11.543 a 1.002 1.002 0 0 1 0.31 -0.724 l 10 -9.543 a 1.001 1.001 0 0 1 1.38 0 l 10 9.543 a 1.002 1.002 0 0 1 0.31 0.724 V 22 a 1 1 0 0 1 -1 1 Z"'
        }
      ></path>
    </HomeBtn>
  );
};

const HomeBtn = styled.svg`
  color: #262626;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const PostBtn = styled.svg`
  color: rgb(38, 38, 38);
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const MapBtn = styled.svg`
  color: #262626;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;
export default HeaderBtn;
