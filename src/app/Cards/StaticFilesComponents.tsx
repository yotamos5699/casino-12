import React from "react";
import { FileNamesReturnType } from "../screens/screenFetcher";
import LobbyComponent from "./server/LobbyComponent";

type StataticFileComponentType = React.HTMLAttributes<HTMLElement> & { fileNames: FileNamesReturnType } & (
    | { folder: "pay-systems" }
    | { folder: "lobby" }
    | { folder: "loyalty" }
  );

function StataticFilesComponents({ folder, fileNames, ...props }: StataticFileComponentType) {
  if (!fileNames?.status || !Array.isArray(fileNames.data)) return <h1>error on {folder}</h1>;
  return (
    <div {...props}>
      {fileNames.data.map((file: string) => (
        <StaticComponentSelector key={folder + file} file={file} type={folder} />
      ))}
    </div>
  );
}

export default StataticFilesComponents;

const StaticComponentSelector = ({ type, file }: { type: "pay-systems" | "lobby" | "loyalty"; file: string }) => {
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
  }
};
