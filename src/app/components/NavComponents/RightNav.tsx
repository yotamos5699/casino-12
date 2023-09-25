"use client";
import { AppStyle_ } from "@/app/Style";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { SvgWraper } from "./LeftSideNav";
const BaseWidth = "w-12";
// className={`flex z-20 group absolute flex-col gap-8 text-xs font-bold justify-center items-center  mt-8 shadow-lg  bg-purple-600  transition-all duration-200 md:hover:w-28  w-12   h-[90%]`}
// "hidden scale-0 shadow-xl shadow-slate-300 bg-slate-800 bg-opacity-70  group-hover:scale-100  transition-all duration-300 group-hover:flex justify-center w-4/5",

const names = [
  "John",
  "Jane",
  "Michael",
  "Emily",
  "William",
  "Olivia",
  "James",
  "Sophia",
  "Benjamin",
  "Isabella",
  "Daniel",
  "Mia",
  "Jacob",
  "Ava",
  "Alexander",
  "Charlotte",
  "Matthew",
  "Amelia",
  "Henry",
  "Harper",
];
type MultType = { id: string; name: string; cost: number; mult: number };
function RightSideNav({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const [items, setItems] = useState<MultType[]>([]);
  useEffect(() => {
    setItems(
      names.map((name) => ({
        name: name,
        id: crypto.randomUUID().substring(0, 10),
        cost: Math.floor(Math.random() * 10000),
        mult: Math.floor(Math.random() * 100),
      }))
    );
  }, []);
  return (
    <div className={props.className}>
      {items && (
        <>
          <MultyCard props={items[0]} isFixed={true} />
          <div className={` gap-2  overflow-auto scrollbar-hide scroll-smooth flex overscroll-none  flex-col w ${AppStyle_.bg.b}`}>
            {items.map((item, i) => i !== 0 && <MultyCard props={item} isFixed={false} />)}
          </div>
        </>
      )}
    </div>
  );
}

export default RightSideNav;

const PlayGenericImage = ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
  <SvgWraper className="h-12" viewBox="0,0 ,35,35" {...props}>
    <path d="M28.493 14.84l-23.653-13.653c-0.191-0.112-0.421-0.179-0.667-0.179-0.736 0-1.333 0.597-1.333 1.333 0 0.002 0 0.004 0 0.006v-0 27.307c0 0.002 0 0.003 0 0.005 0 0.736 0.597 1.333 1.333 1.333 0.245 0 0.475-0.066 0.673-0.182l-0.006 0.003 23.653-13.653c0.407-0.234 0.676-0.665 0.676-1.16s-0.269-0.926-0.669-1.157l-0.006-0.003z"></path>
  </SvgWraper>
);

const MultyCard = ({ props, isFixed }: { props: MultType; isFixed: boolean }) => (
  <div className={`${AppStyle_.bg.a} group ${isFixed && "sticky top-0 "} relative flex flex-row-reverse p-4 border-2`}>
    <span className={`absolute left-2 ${isFixed ? "bg-pink-400" : "bg-blue-500"} text-slate-200 text-xs font-bold bg- top-2 gorder-4`}>
      X{props?.mult}
    </span>

    <img width={55} src={"/monti.jpg"} />
    <div className={"absolute hidden  items-center justify-center h-full w-full top-0 left-0 group-hover:flex bg-black bg-opacity-50 z-50"}>
      {" "}
      <PlayGenericImage />
    </div>
  </div>
);
