'use client';
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useSpring, animated} from '@react-spring/web'
import MenuItem from "@/app/components/MainMenu/MenuItem";


export default function MainMenu(props: any) {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [open, toggle] = useState(false)
    const main = useSpring({y: open ? 10 : 0})
    const tl = useSpring({
        y: open ? 10 : -65,
        x: open ? 0 : 215,
        opacity: open ? 1 : 0,
        delay: 0
    })
    const bl = useSpring({
        y: open ? 100 : -65,
        x: open ? 0 : 74,
        opacity: open ? 1 : 0,
        delay: 100
    })
    const br = useSpring({
        y: open ? 100 : -65,
        x: open ? 0 : -74,
        opacity: open ? 1 : 0,
        delay: 200
    })
    const tr = useSpring({
        y: open ? 10 : -65,
        x: open ? 0 : -215,
        opacity: open ? 1 : 0,
        delay: 300
    })

    const handleClick = () => {
        toggle(!open)
    }

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        console.log(screenSize)
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <animated.div className="flex flex-col w-full justify-around items-center">
            <animated.div
                onClick={handleClick}
                style={{
                    backgroundImage: "url(" + "/assets/svg/stacked-peaks-haikei.svg" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    ...main
                }}
                className="z-[100] h-16 w-16 rounded-full">
                <Image
                    priority
                    width={0}
                    height={0}
                    src="/assets/svg/menu-burger.svg"
                    alt={""}
                    style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",

                    }}/>
            </animated.div>
            <div className="flex flex-row w-4/12 justify-around">
                <MenuItem
                    open={open}
                    style={useSpring({
                        y: open ? 10 : -65,
                        x: open ? 0 : 215,
                        opacity: open ? 1 : 0,
                        delay: 0
                    })}
                >
                </MenuItem>
                <animated.div
                    onClick={handleClick}
                    style={
                        bl
                    }
                    className="h-16 w-16 rounded-full bg-white">
                    <Image priority width={0} height={0} src="/assets/svg/stacked-peaks-haikei.svg" alt={""} style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                    }}/>
                </animated.div>
                <animated.div
                    onClick={handleClick}
                    style={
                        br
                    } className="h-16 w-16 rounded-full bg-white">
                    <Image priority width={0} height={0} src="/assets/svg/stacked-peaks-haikei.svg" alt={""} style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                    }}/>
                </animated.div>
                <animated.div
                    onClick={handleClick}
                    style={tr}
                    className="h-16 w-16 rounded-full bg-white">
                    <Image priority width={0} height={0} src="/assets/svg/stacked-peaks-haikei.svg" alt={""} style={{
                        borderRadius: "100%",
                        width: "100%",
                        height: "100%",
                    }}/>
                </animated.div>
            </div>
        </animated.div>
    );
}