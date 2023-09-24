import { Session } from "next-auth";
import { BASE_URL } from "../page";
import { cache } from "react";
import { Banner_, Game_, GenericCardType, Promotion_, Routs, User } from "../types";
import { GetUserRelatedDataReturnType } from "../api/getUserData/helper";
import { FileNamesReturnType, getScreenApiData } from "../screens/screenFetcher";
type Tokenayzer = { session: Session | null; token: string };

//

const getFullUserJson = cache(
  async ({ session, token }: Tokenayzer): GetUserRelatedDataReturnType =>
    fetch(BASE_URL + "api/getUserData", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({ user: session?.user, token: token }),
    })
      .then((res) => res.json())
      .then((data) => data.data)
);

export function getUserRelatedData({ session, token, rout }: Tokenayzer & { rout: "promotions" }): Promise<Promotion_[]>;
export function getUserRelatedData({ session, token, rout }: Tokenayzer & { rout: "login" }): Promise<User[]>;
export function getUserRelatedData({
  session,
  token,
  rout,
}: Tokenayzer & { rout: "home" }): Promise<{ Games: Game_[]; Banners: Banner_[]; staticFiles: FileNamesReturnType[] }>;
export async function getUserRelatedData({ session, token, rout }: Tokenayzer & { rout: Routs }): Promise<unknown> {
  console.log({ rout });
  const FullApiDataPromise = getFullUserJson({ session, token });
  const staticFilesPromise = getScreenApiData(rout);

  const [FullApiData, staticFiles] = await Promise.all([FullApiDataPromise, staticFilesPromise]);
  console.log({ FullApiData, staticFiles });
  switch (rout) {
    case "promotions": {
      return FullApiData.PromotionsData;
    }
    case "home": {
      return { Games: FullApiData.GamesData, Banners: FullApiData.BannersData, staticFiles };
    }
    case "login": {
      return FullApiData.PermissionsData;
    }
    default: {
      throw new Error("no such route");
    }
  }
}
