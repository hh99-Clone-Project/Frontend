import React from "react";
import styled from "styled-components";

const PostBtn = (props) => {
  const { type, onClick } = props;

  if (type === "Upload") {
    return (
      <Upload fill="#262626" role="img" viewBox="0 0 97.6 77.3">
        <path
          d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
          fill="currentColor"
        />
        <path
          d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
          fill="currentColor"
        />
        <path
          d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
          fill="currentColor"
        />
      </Upload>
    );
  }

  if (type === "Profile") {
    return (
      <Profile fill="#262626" viewBox="0 0 24 24" role="img">
        <circle
          cx="12.004"
          cy="12.004"
          fill="none"
          r="10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <circle
          cx="12.006"
          cy="9.718"
          fill="none"
          r="4.109"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </Profile>
    );
  }

  if (type === "Map") {
    return (
      <MapBtn fill="#262626" role="img" viewBox="0 0 24 24">
        <polygon
          fill="none"
          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <polygon
          fillRule="evenodd"
          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
        />
        <circle
          cx="12.001"
          cy="12.005"
          fill="none"
          r="10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </MapBtn>
    );
  }
  if (type === "Add") {
    return (
      <AddBtn onClick={onClick} fill="#262626" role="img" viewBox="0 0 24 24">
        <path
          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="6.545"
          x2="17.455"
          y1="12.001"
          y2="12.001"
        />
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="12.003"
          x2="12.003"
          y1="6.545"
          y2="17.455"
        />
      </AddBtn>
    );
  }
  if (type === "Home") {
    return (
      <HomeBtn fill="#262626" role="img" viewBox="0 0 24 24">
        <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path>
      </HomeBtn>
    );
  }

  if (type === "Dm") {
    return (
      <Dm onClick={onClick} viewBox="0 0 24 24" fill="black" role="img">
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        />
        <polygon
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        />
      </Dm>
    );
  }
  if (type === "Comment") {
    return (
      <Comment viewBox="0 0 24 24" fill="black" role="img">
        <path
          d="M 20.656 17.008 a 9.993 9.993 0 1 0 -3.59 3.615 L 22 22 Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </Comment>
    );
  }

  if (type === "BookMark") {
    return (
      <BookMark viewBox="0 0 24 24" fill="black" role="img">
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </BookMark>
    );
  }

  if (type === "SmallMark") {
    return (
      <SmallMark viewBox="0 0 24 24" fill="black" role="img">
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </SmallMark>
    );
  }

  if (type === "Option") {
    return (
      <Option viewBox="0 0 24 24" fill="black" role="img">
        <circle
          cx="12"
          cy="12"
          fill="none"
          r="8.635"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </Option>
    );
  }

  if (type === "Change") {
    return (
      <Change viewBox="0 0 24 24" fill="black" role="img">
        <path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z" />
      </Change>
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

const HomeBtn = styled.svg`
  color: #262626;
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const AddBtn = styled.svg`
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

const Profile = styled.svg`
  color: #262626;
  height: 16px;
  width: 16px;
  margin: 10px 0 0 0;
`;

const SmallMark = styled.svg`
  color: black;
  height: 16px;
  width: 16px;
  margin: 10px 0 0 0;
  &:hover {
    cursor: pointer;
  }
`;

const Option = styled.svg`
  color: black;
  height: 16px;
  width: 16px;
  margin: 10px 0 0 0;
  &:hover {
    cursor: pointer;
  }
`;

const Change = styled.svg`
  color: black;
  height: 16px;
  width: 16px;
  margin: 10px 0 0 0;
  &:hover {
    cursor: pointer;
  }
`;

const Upload = styled.svg`
  color: #262626;
  height: "77px";
  width: "96px";
`;
export default PostBtn;
