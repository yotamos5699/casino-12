"use client";
import React from "react";
import Image from "next/image";
import { Banner_ } from "@/app/types";
import { colorsHashStyle_ } from "./colors";

function Banner({ card, onClick, ...props }: { card: Banner_ } & React.HTMLAttributes<HTMLElement>) {
  console.log({ cardStyle: card.styles });
  return (
    <div
      dir={"ltr"}
      onClick={onClick}
      className={`  p-8 flex border-2 text-white ${
        colorsHashStyle_[card.styles.bgColor as keyof typeof colorsHashStyle_][0]
      } h-full w-full flex-shrink-0  relative rounded-lg justify-between`}
    >
      <div className={`w-1/2 flex flex-col justify-between `}>
        <div className="flex flex-col gap-2  ">
          <h1 className="text-3xl font-bold"> {card.title} </h1>
          <h2>{card.subTitle}</h2>
          <button
            className={`w-1/4 bg-slate-50 ${
              colorsHashStyle_[card.styles.bgColor as keyof typeof colorsHashStyle_][1]
            } p-2 rounded-xl shadow-md`}
          >
            {card.btnText}
          </button>
        </div>
        <div className="flex gap-4">
          <div className="flex   gap-2">
            <Image src={"/assets/images/bannerSvg/bigPercents.svg"} alt="" width={45} height={45} />
            <p className="w-3/4 ">{card.trophyText}</p>
          </div>
          <div className="flex gap-2">
            <Image src={"/assets/images/bannerSvg/revenue.svg"} alt="" width={45} height={45} />
            <p className="w-3/4  ">{card.crownText}</p>
          </div>
        </div>
      </div>
      <div className="relative flex-shrink-0 flex flex-col h-52 w-1/4 ">
        <Image src={card.imagesArray[0]} alt="" fill />
      </div>
    </div>
  );
}

export default Banner;
