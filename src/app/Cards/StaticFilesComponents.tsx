import React from "react";
import { FileNamesReturnType } from "../screens/screenFetcher";
import LobbyComponent from "./server/LobbyComponent";

import BonuseCard from "./server/BonuseCard";
import { BonusCard_ } from "../screens/StaticScreensContent";

type StataticFileComponentType = React.HTMLAttributes<HTMLElement> & {} & (
    | { folder: "pay-systems"; fileNames: FileNamesReturnType }
    | { folder: "lobby"; fileNames: FileNamesReturnType }
    | { folder: "loyalty"; fileNames: FileNamesReturnType }
    | { folder: "bonuses"; Cards: BonusCard_[] }
  );

function StataticFilesComponents({ ...props }: StataticFileComponentType) {
  if (props.folder === "bonuses") {
    return (
      <div {...props}>
        {props.Cards.map((card) => (
          <StaticComponentSelector key={card.id} file={card} type={props.folder} />
        ))}
      </div>
    );
  } else if (!props.fileNames?.status || !Array.isArray(props.fileNames.data)) return <h1>error on {props.folder}</h1>;
  return (
    <div {...props}>
      {props.fileNames.data.map((file: string) => (
        <StaticComponentSelector key={props.folder + file} file={file} type={props.folder} />
      ))}
    </div>
  );
}

export default StataticFilesComponents;

const StaticComponentSelector = ({
  type,
  file,
}: {} & ({ type: "pay-systems" | "lobby" | "loyalty"; file: string } | { type: "bonuses"; file: BonusCard_ })) => {
  switch (type) {
    case "lobby": {
      return <LobbyComponent fileName={file} />;
    }
    case "loyalty": {
      const filePath = `assets/images/loyalty/${file}`;
      console.log({ filePath });
      return <img width={60} src={filePath} />;
    }
    case "pay-systems": {
      return <img width={60} src={`assets/images/pay-systems/${file}`} />;
    }
    case "bonuses": {
      return <BonuseCard card={file} />;
    }
  }
};
