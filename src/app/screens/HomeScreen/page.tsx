import { GenericCardType, User } from "../../types";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserRelatedData } from "@/app/utils/fetchHelper";
import { getScreenApiData } from "../screenFetcher";
import DynamicFilesComponents from "@/app/Cards/DynamicFilesComponents";
import StataticFilesComponents from "@/app/Cards/StaticFilesComponents";
const InitialMainStats = [
  { title: "top support", values: ["24/7"] },
  { title: "average payout speed", values: ["24 min", "18 sec"] },
  { title: "popular games in the catalog", values: [8798] },
  { title: "Bounty bonuses accrued", values: [120948] },
];

async function HomeScreen({ user }: { user: User; Cards: GenericCardType[] }) {
  const session = await getServerSession(options);
  const Data = await getUserRelatedData({ session, token: crypto.randomUUID(), rout: "home" });
  console.log({ Data });
  if (!Data) return <h1>"וואי וואי בלגן"</h1>;

  return (
    <div className="flex flex-col gap-8 ">
      <DynamicFilesComponents
        className="flex h-1/4  w-full  flex-shrink-0  items-center  cursor-pointer  overflow-auto scrollbar-hide "
        type="banners"
        CardsData={Data.Banners}
      />

      <DynamicFilesComponents className=" grid grid-cols-2 w-full border-4  md:grid-cols-4" type="stats" CardsData={InitialMainStats} />
      <StataticFilesComponents
        folder="lobby"
        fileNames={Data.staticFiles.filter((FFN) => FFN.folder === "lobby")[0]}
        className={"flex w-full justify-evenly"}
      />
      {/* <StataticFilesComponenst
        folder="lobby"
        fileNames={foldersFileNames.filter((FFN) => FFN.folder === "lobby")[0]}
        className={"flex flex-wrap"}
      />
      <StataticFilesComponenst
        folder="pay-systems"
        fileNames={foldersFileNames.filter((FFN) => FFN.folder === "pay-systems")[0]}
        className={"flex flex-wrap"}
      /> */}
    </div>
  );
}

export default HomeScreen;
//drive.google.com/uc?export=view&id=1zif9K-YwjufGewb1yaDJNC1hnO8ds-do
// https:
