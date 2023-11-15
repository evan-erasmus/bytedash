"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import MenuItem from "@/app/components/MainMenu/MenuItem";

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

  console.log(tr, tl, bl, br, props);
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
    console.log(screenSize);
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <animated.div className="flex flex-col w-full justify-around items-center">
      <animated.div
        onClick={handleClick}
        style={{
          backgroundImage:
            "url(" + "/assets/svg/stacked-peaks-haikei.svg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          ...main,
        }}
        className="z-[100] h-16 w-16 rounded-full"
      ></animated.div>
      <div className="flex flex-row w-[30rem] justify-around">
        <MenuItem open={open} style={tl} />
        <MenuItem open={open} style={bl} />
        <MenuItem open={open} style={br} />
        <MenuItem open={open} style={tr} />
      </div>
    </animated.div>
  );
}
