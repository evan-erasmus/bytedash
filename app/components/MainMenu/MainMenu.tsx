"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import MenuItem from "@/app/components/MainMenu/MenuItem";
import { FaChartLine } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import {RiDashboard2Line, RiLineChartLine, RiListCheck3, RiMenu4Fill, RiUser4Line} from "react-icons/ri";


export default function MainMenu(...props: any[]): React.JSX.Element {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [open, toggle] = useState(false);
  const main = useSpring({ y: open ? 10 : 0 });
  const menuOpacity = open ? 1 : 0;
  const tl = useSpring({
    y: open ? 0 : -65,
    x: open ? 30 : 176,
    opacity: menuOpacity,
    delay: 0,
  });
  const bl = useSpring({
    y: open ? 50 : -65,
    x: open ? 10 : 63,
    opacity: menuOpacity,
    delay: 100,
  });
  const br = useSpring({
    y: open ? 50 : -65,
    x: open ? -10 : -63,
    opacity: menuOpacity,
    delay: 200,
  });
  const tr = useSpring({
    y: open ? 0 : -65,
    x: open ? -30 : -176,
    opacity: menuOpacity,
    delay: 300,
  });

  // console.log(tr, tl, bl, br, props);
  const handleClick = (): void => {
    toggle(!open);
  };

  function getCurrentDimension(): {
    width: number;
    height: number;
  } {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = (): void => {
      setScreenSize(getCurrentDimension());
    };
    // console.log(screenSize);
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <animated.div className="flex flex-col w-full justify-around items-center">
      <animated.div
          className={"cursor-pointer rounded-2xl bg-[#B3005E] h-full flex items-center justify-center justify-center z-[100] p-3"}
        onClick={handleClick}
      ><RiMenu4Fill size={40}/></animated.div>
      <div className="flex flex-row w-[30rem] justify-around">
        <MenuItem route={"dashboard"} icon={<RiDashboard2Line size={40}/>} open={open} style={tl} />
        <MenuItem route={"analytics"} icon={<RiLineChartLine size={40}/>} open={open} style={bl} />
        <MenuItem route={"lists"} icon={<RiListCheck3 size={40}/>} open={open} style={br} />
        <MenuItem route={"profile"} icon={<RiUser4Line size={40}/>} open={open} style={tr} />
      </div>
    </animated.div>
  );
}
