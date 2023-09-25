import React from "react";
import Image from "next/image";
import { AppStyle_ } from "@/app/Style";
import Rollete from "./Rollete";
import StataticFilesComponents from "@/app/Cards/StaticFilesComponents";
import { BonusesContent } from "../StaticScreensContent";

function Bonuses() {
  return (
    <div dir="ltr" className="flex w-full   flex-col  dark:text-slate-100">
      <StepsComponent />
      <div className=" flex flex-col gap-2 lg:flex-row  lg:h-1/3 h-full border-4 p-6">
        <Rollete />
        <SubscribeToTelegram />
      </div>

      <StataticFilesComponents folder="bonuses" Cards={BonusesContent.cards} className={"grid grid-cols-1 md:grid-cols-2"} />
    </div>
  );
}

export default Bonuses;

const StepsComponent = () => (
  <div
    className={`w-full bg-opacity-50   ${AppStyle_.ps.c}`}
    style={{
      background: `url(/assets/images/screens/Bonuses/card_bg_images/repost.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className={`flex justify-between  w-full dark:bg-slate-800 dark:bg-opacity-70 p-6`}>
      <div className="flex  flex-col p-4 gap-4  ">
        <div>
          <h2 className="font-bold">dorba dorba yovba blat sdfasdf</h2>
          <p className="flex gap-1">
            <span className="text-yellow-400 font-bold"> 60.00 p</span> <span className="font-bold">sdasdasdasd sdsdd</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xs font-bold  ">
          {BonusesContent.steps.map((row) => (
            <p className="flex gap-2">
              <Image width={20} height={20} alt="" src={`/assets/images/${row.status}.svg`} /> <span>{row.content}</span>
            </p>
          ))}
        </div>
      </div>
      <Image className="hidden md:flex" height={100} width={200} alt="" src={`/assets/images/screens/bonuses/coins.png`} />
    </div>
  </div>
);

const SubscribeToTelegram = () => (
  <div className="">
    <div className={`flex flex-col  border-4  relative md:h-full flex-1 h-44 font-bold bg-sky-400    ${AppStyle_.ps.c}`}>
      <div>
        {BonusesContent.post.map((section) => (
          <div>{section.map((part) => part)}</div>
        ))}
      </div>
      <Image className="absolute left-2 bottom-2" width={250} height={250} alt="" src={`/assets/images/tg.svg`} />
    </div>
  </div>
);
