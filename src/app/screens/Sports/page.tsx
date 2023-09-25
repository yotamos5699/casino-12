import React from "react";
import Image from "next/image";
import { AppStyle_ } from "@/app/Style";
function Sports() {
  return (
    <div className={`${AppStyle_.bg.b} ${AppStyle_.ps.c} h-full flex gap-8 flex-col justify-center items-center`}>
      <Image width={200} height={100} alt="" src="/logotype.svg" />{" "}
      <Image className="animate-spin" width={60} height={30} alt="" src="/loader.svg" />{" "}
    </div>
  );
}

export default Sports;
