import React, { useEffect, useState } from "react";
const MainScreenValues = [{ title: "top support", values: ["24/7"] }];
export const InitialMainStats = [
  ...MainScreenValues,
  { title: "average payout speed", values: [24, 18] },
  { title: "popular games in the catalog", values: [8798] },
  { title: "Bounty bonuses accrued", values: [120948] },
];
function useSocketData() {
  const [mainScreenStats, setMainScreenStats] = useState<any>([
    ...MainScreenValues,
    { title: "average payout speed", values: [24, 18] },
    { title: "popular games in the catalog", values: [8798] },
    { title: "Bounty bonuses accrued", values: [120948] },
  ]);
  useEffect(() => {
    setInterval(() => {
      setMainScreenStats([
        ...MainScreenValues,
        { title: "average payout speed", values: [Math.floor(Math.random() * 59), Math.floor(Math.random() * 59)] },
        { title: "popular games in the catalog", values: [Math.floor(Math.random() * 9990)] },
        { title: "Bounty bonuses accrued", values: [Math.floor(Math.random() * 900000)] },
      ]);
    }, 5000);
  }, []);
  return mainScreenStats;
}

export default useSocketData;
