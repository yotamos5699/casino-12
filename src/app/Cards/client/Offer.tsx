import React from "react";
import { colorsHashStyle_ } from "./colors";
import Image from "next/image";
import { GenericCardType } from "@/app/types";

function OfferCard({ card, onClick, ...props }: { card: GenericCardType } & React.HTMLAttributes<HTMLElement>) {
  console.log({ cardStyle: card.styles });
  return (
    <div
      dir={"ltr"}
      onClick={onClick}
      className={`  p-8 flex border-2 text-white ${
        colorsHashStyle_[card.styles.bgColor as keyof typeof colorsHashStyle_][0]
      } h-full flex flex-col flex-shrink-0  relative rounded-lg justify-between`}
    >
      <div className="relative flex-shrink-0 flex flex-col h-52 w-full ">
        <Image src={card.imagesArray[0]} alt="" fill />
      </div>
      <div className={`w-full flex flex-col justify-between `}>
      <h1 className="text-3xl font-bold"> {card.title} </h1>
        <div className="flex flex-col gap-2  ">
         
          <p ><span>{card.name}</span><span>כל</span></p>
        </div>
      </div>
      <button
            className={`w-1/4 bg-slate-50 ${
              colorsHashStyle_[card.styles.bgColor as keyof typeof colorsHashStyle_][1]
            } p-2 rounded-xl shadow-md`}
          >
            {card.btnText}
          </button>
    </div>
  );
}

export default OfferCard;
