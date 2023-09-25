import { GenericCardType, User } from "../../types";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserRelatedData } from "@/app/utils/fetchHelper";
import { getScreenApiData } from "../screenFetcher";
import DynamicFilesComponents from "@/app/Cards/DynamicFilesComponents";
import StataticFilesComponents from "@/app/Cards/StaticFilesComponents";

import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { AppStyle_ } from "@/app/Style";
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

      <DynamicFilesComponents className=" grid grid-cols-2 w-full gap-2  md:grid-cols-4" type="stats" CardsData={InitialMainStats} />
      <StataticFilesComponents
        folder="lobby"
        fileNames={Data.staticFiles.filter((FFN) => FFN.folder === "lobby")[0]}
        className={"flex w-full justify-evenly"}
      />
      <GameCategoryWaraper firstLatter="N" text="hi you" />
    </div>
  );
}

export default HomeScreen;
//drive.google.com/uc?export=view&id=1zif9K-YwjufGewb1yaDJNC1hnO8ds-do
// https:

const GameCategoryWaraper = ({ text, firstLatter }: { text: string; firstLatter: string }) => {
  return (
    <div className=" flex w-full justify-between items-center ">
      <div className="flex w-3/4 items-center">
        <div
          style={{
            background:
              "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg1IiBoZWlnaHQ9IjM2IiBjbGFzcz0ic2VjdGlvbl9faGVhZGVyX19saW5rX19iZyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yNTEgMjEuNTUxYTcgNyAwIDAgMSAwLTcuMTAybDUuODg3LTEwQTcgNyAwIDAgMSAxNS4xNzEgMWgxNTQuNjU4YTcgNyAwIDAgMSA2LjAzMyAzLjQ0OWw1Ljg4NyAxMGE3LjAwMSA3LjAwMSAwIDAgMSAwIDcuMTAybC01Ljg4NyAxMEE3IDcgMCAwIDEgMTY5LjgyOSAzNUgxNS4xN2E3IDcgMCAwIDEtNi4wMzItMy40NDlsLTUuODg3LTEwWiIgc3Ryb2tlPSIjODgzRkVCIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNy4zNjUgMTkuNWEzIDMgMCAwIDEgMC0zbDUuNzctMTBBMyAzIDAgMCAxIDE1LjczMiA1aDE1My41OTFjMS4wNDEgMCAyLjAwOS41NCAyLjU1NSAxLjQyOGw2LjE1MyAxMGMuNTk0Ljk2NC41OTQgMi4xOCAwIDMuMTQ0bC02LjE1MyAxMEEzIDMgMCAwIDEgMTY5LjMyNCAzMUgxNS43MzNhMyAzIDAgMCAxLTIuNTk5LTEuNWwtNS43Ny0xMFoiIGZpbGw9InVybCgjYSkiIGZpbGwtb3BhY2l0eT0iLjIiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxOS4zODkiIHkxPSI1IiB4Mj0iMjAyLjI5NyIgeTI9IjMyLjg2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=) ",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={`h-8 w-[168px] relative flex justify-center gap-6 items-center ${AppStyle_.tx.d}`}
        >
          <BiRightArrowAlt className={"text-xl"} />
          <BiLeftArrowAlt className={" text-xl"} />
        </div>
        <div className="flex w-1/2 bg-gradient-to-r from-[#221435] h-1  to-[#873feb] "></div>
      </div>
      <p className="flex items-center justify-center">
        <span className={`${AppStyle_.tx.a} text-xl`}>{text}</span>
        <span className={`text-2xl text-slate-100 font-bold`}>{firstLatter}</span>
      </p>
    </div>
  );
};
// border-l-[50px] border-l-transparent
// border-r-[50px] border-r-transparent
// border-b-[50px] border-b-transparent"
