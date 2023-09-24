import { Stat_ } from "@/app/types";
import React from "react";

function Stat({ card }: { card: Stat_ }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-bold dark:text-slate-100">
      <span>{card.title}</span>
      <p>
        {card.values.map((val) => (
          <span>{val}</span>
        ))}
      </p>
    </div>
  );
}

export default Stat;
