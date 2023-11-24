import Image from "next/image";
import { animated } from "@react-spring/web";
import React from "react";
import { useRouter } from "next/navigation";

export default function MenuItem(props: any): React.JSX.Element {
  const style = props.style;
  const router = useRouter();

  // console.log(style);

  function handleClick(): void {
    router.push("/" + props.route);
    setTimeout(() => ({}), 2750);
  }

  return (
    <animated.div
      {...props}
      onClick={handleClick}
      className="h-16 w-16 rounded-full cursor-pointer bg-white"
    >
      <div className={"rounded-2xl h-full flex bg-[#E90064] items-center justify-center"}>
        {props.icon}
      </div>
    </animated.div>
  );
}
