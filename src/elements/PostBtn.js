import React from "react";
import styled from "styled-components";

const PostBtn = (props) => {
  const { type } = props;

  if (type == "Dm") {
    return (
      <Dm viewBox={"0 0 24 24"} fill={"black"} role={"img"}>
        <line
          fill={"none"}
          stroke={"currentColor"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
          x1={"22"}
          x2={"9.218"}
          y1={"3"}
          y2={"10.083"}
        />
        <polygon
          fill={"none"}
          stroke={"currentColor"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
          points={"11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"}
        />
      </Dm>
    );
  }
  if (type == "Comment") {
    return (
      <Comment viewBox={"0 0 24 24"} fill={"black"} role={"img"}>
        <path
          d={"M 20.656 17.008 a 9.993 9.993 0 1 0 -3.59 3.615 L 22 22 Z"}
          fill={"none"}
          stroke={"currentColor"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        />
      </Comment>
    );
  }

  if (type == "BookMark") {
    return (
      <BookMark viewBox={"0 0 24 24"} fill={"black"} role={"img"}>
        <polygon
          fill={"none"}
          points={"20 21 12 13.44 4 21 4 3 20 3 20 21"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2"}
        />
      </BookMark>
    );
  }

  return (
    <Heart viewBox={"0 0 24 24"} fill={"black"} role={"img"}>
      <path
        d={
          "M 16.792 3.904 A 4.989 4.989 0 0 1 21.5 9.122 c 0 3.072 -2.652 4.959 -5.197 7.222 c -2.512 2.243 -3.865 3.469 -4.303 3.752 c -0.477 -0.309 -2.143 -1.823 -4.303 -3.752 C 5.141 14.072 2.5 12.167 2.5 9.122 a 4.989 4.989 0 0 1 4.708 -5.218 a 4.21 4.21 0 0 1 3.675 1.941 c 0.84 1.175 0.98 1.763 1.12 1.763 s 0.278 -0.588 1.11 -1.766 a 4.17 4.17 0 0 1 3.679 -1.938 m 0 -2 a 6.04 6.04 0 0 0 -4.797 2.127 a 6.052 6.052 0 0 0 -4.787 -2.127 A 6.985 6.985 0 0 0 0.5 9.122 c 0 3.61 2.55 5.827 5.015 7.97 c 0.283 0.246 0.569 0.494 0.853 0.747 l 1.027 0.918 a 44.998 44.998 0 0 0 3.518 3.018 a 2 2 0 0 0 2.174 0 a 45.263 45.263 0 0 0 3.626 -3.115 l 0.922 -0.824 c 0.293 -0.26 0.59 -0.519 0.885 -0.774 c 2.334 -2.025 4.98 -4.32 4.98 -7.94 a 6.985 6.985 0 0 0 -6.708 -7.218 Z"
        }
      />
    </Heart>
  );
};

const Heart = styled.svg`
  color: black;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
    fill: #8e8e8e;
  }
`;

const Comment = styled.svg`
  color: black;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const Dm = styled.svg`
  color: black;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const BookMark = styled.svg`
  color: black;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;
export default PostBtn;
