"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppStyle_ } from "@/app/Style";
function Rollete() {
  const [spin, setSpin] = useState(false);
  return (
    <div className={`flex items-center flex-col lg:flex-row w-full  lg:w-2/3 ${AppStyle_.ps.c}`}>
      <div className="relative">
        <button
          onClick={() => setSpin(!spin)}
          className="absolute inset-0 h-24 z-20 w-24 text-black font-bold rounded-full shadow-xl mx-auto my-auto bg-yellow-400 "
        >
          {" "}
          aSDASD
        </button>
        <Image
          className={`${spin ? "animate-spin" : ""}`}
          height={400}
          width={400}
          alt=""
          src={"/assets/images/screens/Bonuses/wheel.png"}
        />
      </div>
      <div className="flex flex-col gap-2  justify-center ">
        <h2>Spin the roulette and get bonuses!</h2>
        <p>Spin the roulette once every 15 minutes and get up to 3.00 ₽ on your balance!</p>
        <p className="text-xs text-slate-500">Spin the wheel without limits every day!</p>
      </div>
    </div>
  );
}

export default Rollete;
