import React from "react";
let test = 'rgba(92,92,92,0.36)'
export default function Home(): React.JSX.Element {
  return (
    <div className="bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-12 flex grow justify-betweenitems-center flex-col w-full h-full">
      <div className={"flex grow w-full h-full flex-row justify-between items-center"}>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Physical Health
            <progress value={0.7} />
        </div>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Finance
            <progress value={0.4} />
        </div>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Career
            <progress value={0.2} />
        </div>
      </div>
      <div className={"flex grow flex-row justify-between items-center"}>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Mental Health
            <progress value={0.1} />
        </div>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Environment
            <progress value={0.8} />
        </div>
        <div className={"m-6 flex flex-col w-[30%] h-48 justify-center items-center bg-[#5C5C5C5B] shadow shadow-[#000] rounded-lg p-8"}>
            Social
            <progress value={1} />
        </div>
      </div>
    </div>
  );
}
