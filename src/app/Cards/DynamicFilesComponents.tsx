"use client";
import React from "react";

import { Banner_, Stat_ } from "../types";
import Banner from "./client/Banner";
import Stat from "./client/Stat";

type DynamicFileComponentType =
  | {
      type: "banners";
      CardsData: Banner_[];
    }
  | {
      type: "stats";
      CardsData: { title: string; values: any[] }[];
    };

type DynamicComponentSelectorProps = {
  type: "banners" | "stats";
  Card: Banner_ | Stat_;
};

const DynamicComponentSelector = ({ type, Card }: DynamicComponentSelectorProps) => {
  switch (type) {
    case "banners": {
      console.log("banner!!:", { Card });
      return <Banner card={Card as Banner_} />;
    }
    case "stats": {
      return <Stat card={Card as Stat_} />;
    }
  }
};

function DynamicFilesComponents({ type, CardsData, className, ...props }: DynamicFileComponentType & React.HTMLAttributes<HTMLElement>) {
  if (!CardsData) return <h1>error on {type}</h1>;
  console.log({ type });
  return (
    <div className={className} {...props}>
      {CardsData.map((card, index) => (
        <DynamicComponentSelector key={index} Card={card} type={type} />
      ))}
    </div>
  );
}

export default DynamicFilesComponents;
