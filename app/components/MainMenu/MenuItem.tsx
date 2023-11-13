import Image from "next/image";
import {animated, useSpring} from "@react-spring/web";
import React from "react";
import {useRouter} from "next/navigation";

export default function MenuItem(props: any) {
    const style = props.style;
    const bl = useSpring({
        y: props.open ? 10 : -165,
        x: props.open ? 0 : 74,
        opacity: props.open ? 1 : 0,
        delay: 100
    })
    const br = useSpring({
        y: props.open ? 10 : -165,
        x: props.open ? 0 : -74,
        opacity: props.open ? 1 : 0,
        delay: 200
    })
    const tr = useSpring({
        y: props.open ? 10 : -65,
        x: props.open ? 0 : -215,
        opacity: props.open ? 1 : 0,
        delay: 300
    })
    const router = useRouter()

    function handleClick() {
        router.push('/dashboard')
    }

    return (
        <animated.div
            {...props}
            onClick={handleClick}
            className="h-16 w-16 rounded-full bg-white">
            <Image priority width={0} height={0} src="/assets/svg/stacked-peaks-haikei.svg" alt={""} style={{
                borderRadius: "100%",
                width: "100%",
                height: "100%",
            }}/>
        </animated.div>
    )
}