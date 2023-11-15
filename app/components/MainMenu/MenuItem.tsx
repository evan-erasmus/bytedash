import Image from "next/image";
import { animated } from "@react-spring/web";
import React from "react";
import { useRouter } from "next/navigation";

export default function MenuItem(props: any): React.JSX.Element {
  const style = props.style;
  const router = useRouter();

  console.log(style);

  function handleClick(): void {
    router.push("/dashboard");
    setTimeout(() => ({}), 2750);
  }

  return (
    <animated.div
      {...props}
      onClick={handleClick}
      className="h-16 w-16 rounded-full bg-white"
    >
      <Image
        priority
        width={0}
        height={0}
        src="/assets/svg/stacked-peaks-haikei.svg"
        alt={""}
        style={{
          borderRadius: "100%",
          width: "100%",
          height: "100%",
        }}
      />
    </animated.div>
  );
}
