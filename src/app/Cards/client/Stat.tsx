import { AppStyle_ } from "@/app/Style";
import { Stat_ } from "@/app/types";
import React from "react";

function Stat({ card }: { card: Stat_ }) {
  return (
    <div className={`flex flex-col items-center gap-2 p-4 text-bold font-bold dark:text-slate-100 ${AppStyle_.ps.c} ${AppStyle_.bg.b} `}>
      <p>
        {card.values.map((val) => (
          <span className="">{val}</span>
        ))}
      </p>
      <span className={`${AppStyle_.tx.c}`}>{card.title}</span>
    </div>
  );
}

export default Stat;
