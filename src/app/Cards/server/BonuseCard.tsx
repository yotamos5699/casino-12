import { AppStyle_ } from "@/app/Style";
import { BonusCard_ } from "@/app/screens/StaticScreensContent";
import React from "react";
import Image from "next/image";
const RowSpanOptions = ["row-span-1", "row-span-2"];

function BonuseCard({ card }: { card: BonusCard_ }) {
  return (
    <div
      className={`flex flex-col relative h-full justify-between ${AppStyle_.bg.b} ${AppStyle_.ps.c} ${RowSpanOptions[card.rows - 1]} ${
        card.rows === 2 && "md:col-span-2"
      } `}
    >
      {card.data.map((part) => part)}

      <div className="flex w-full justify-start">
        <BonusesGenericButton linkTo="sd" text="sdasda" />
      </div>

      <Image src={card.bgImage} fill alt="" />
    </div>
  );
}

export default BonuseCard;

export const BonusesGenericButton = ({ text, linkTo }: { text: string; linkTo: string }) => (
  <button className={"p-1 w-28 bg-yellow-400 rounded-lg font-bold text-purple-800"}>{text}</button>
);
