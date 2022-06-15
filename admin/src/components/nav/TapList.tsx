// lib
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TabMenu from "./TabMenu";

// components

interface ITabMenuList {
  id: number;
  tapName: string;
  darkImg: string;
  whiteImg: string;
}

export default function TapList() {
  const tabMenuList: ITabMenuList[] = [
    {
      id: 1,
      tapName: "Dashboard",
      darkImg: require("../../styles/img/darkDashboard.png"),
      whiteImg: require("../../styles/img/whiteDashboard.png"),
    },
    {
      id: 2,
      tapName: "upload",
      darkImg: require("../../styles/img/darkUpload.png"),
      whiteImg: require("../../styles/img/whiteUpload.png"),
    },
    {
      id: 3,
      tapName: "testimonial",
      darkImg: require("../../styles/img/darkPeople.png"),
      whiteImg: require("../../styles/img/whitePeople.png"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {tabMenuList.map((item: ITabMenuList, index: number) => (
        <div onClick={() => setActiveIndex(index)}>
          <TabMenu
            key={item.id}
            tapName={item.tapName}
            darkImg={item.darkImg}
            whiteImg={item.whiteImg}
            isActive={activeIndex === index}
          />
        </div>
      ))}
    </>
  );
}