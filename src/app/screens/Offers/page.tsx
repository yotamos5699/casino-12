import { GenericCardType, User } from "../../types";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserRelatedData } from "@/app/utils/fetchHelper";
import { getScreenApiData } from "../screenFetcher";
import DynamicFilesComponents from "@/app/Cards/DynamicFilesComponents";

async function Offers({ user }: { user: User; Cards: GenericCardType[] }) {
  const session = await getServerSession(options);
  const InitialData = await getUserRelatedData({ session, token: crypto.randomUUID() });
  if (!InitialData) return <h1>"וואי וואי בלגן"</h1>;

  const foldersFileNames = getScreenApiData("home");
  const Cards = InitialData.data.CardsData;

  return (
    <div>

      <DynamicFilesComponents
        className="flex h-full  w-full  flex-shrink-0  items-center  cursor-pointer  overflow-auto scrollbar-hide "
        type="offer"
        CardsData={Cards.filter((card) => card.type === "banner")}
      
      />
        


      {/* <StataticFilesComponenst
        folder="loyalty"
        fileNames={foldersFileNames.filter((FFN) => FFN.folder === "loyalty")[0]}
        className={"flex flex-wrap"}
      />
      <StataticFilesComponenst
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

export default Offers;
//drive.google.com/uc?export=view&id=1zif9K-YwjufGewb1yaDJNC1hnO8ds-do
// https:
