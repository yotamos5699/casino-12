import React from "react";
import Image from "next/image";
const LobbyToTitleHash = {
  "menu1.svg": "New items",
  "menu2.svg": "Bonus Buy",
  "menu3.svg": "Live",
  "menu4.svg": "Slots",
  "menu5.svg": "Roulette",
  "menu6.svg": "Card",
  "menu7.svg": "Instant Win",
  "menu8.svg": "Jackpot",
};
function LobbyComponent({ fileName }: { fileName: string }) {
  const filePath = `/assets/images/lobby/${fileName}`;
  return (
    <div className="flex justify-center p-2 shadow-lg flex-col dark:text-slate-100 items-center ">
      <Image width={60} height={60} src={filePath} alt={""} />
      <p className=" text-xs">{LobbyToTitleHash[fileName as keyof typeof LobbyToTitleHash]}</p>
    </div>
  );
}

export default LobbyComponent;
