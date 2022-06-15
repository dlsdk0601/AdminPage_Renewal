// lib
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components

export default function TabMenu(props: {
  tapName: string;
  darkImg: string;
  whiteImg: string;
  isActive: boolean;
}) {
  return (
    <TabMenuWrapper isActive={props.isActive}>
      <MenuImageBox>
        <MenuImage
          src={props.isActive ? props.darkImg : props.whiteImg}
          alt="메뉴사진"
        />
      </MenuImageBox>
      <MenuTitle isActive={props.isActive}>{props.tapName}</MenuTitle>
    </TabMenuWrapper>
  );
}

const TabMenuWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: 5% 5%;
  margin: 20px 0;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "white" : "none")};
  &:hover {
    background-color: ${(props) => (props.isActive ? "none" : "#35464e")};
  }
`;

const MenuImageBox = styled.figure`
  width: 35px;
  height: 35px;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuTitle = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 60%;
  font-size: 20px;
  color: ${(props) => (props.isActive ? "#283138" : "white")};
`;