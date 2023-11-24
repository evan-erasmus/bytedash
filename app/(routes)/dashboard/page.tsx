import React from "react";
let test = 'rgba(92,92,92,0.36)'
export default function Home(): React.JSX.Element {
  return (
    <div className="bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-12 flex grow justify-betweenitems-center flex-col w-full">
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Physical Health</div>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Finance</div>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Career</div>
      </div>
      <div className={"flex flex-row justify-between items-center"}>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Mental Health</div>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Environment</div>
        <div className={"m-6 flex flex-col w-[30%] items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>Social</div>
      </div>
    </div>
  );
}
