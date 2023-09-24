import jwt from "jsonwebtoken";
import { Banner_, Game_, GenericCardType, Promotion_, User } from "@/app/types";
import { UserRequest } from "./route";

const PermissionsListUrl =
  "https://script.google.com/macros/s/AKfycbw1oRlSbZFWu6VxyoHKjINhSZuhzHyHyLtoB1HqY3fbBI_3VN5lN4_1ve81MzNwl0IC/exec?user=";

export type GetUserRelatedDataReturnType = Promise<{
  PromotionsData: Promotion_[];
  PermissionsData: User[];
  GamesData: Game_[];
  BannersData: Banner_[];
}>;

export const getApiUserRelatedData = async (data: UserRequest): GetUserRelatedDataReturnType => {
  const ConnectionData = JSON.stringify([
    Intl.DateTimeFormat("he-IL", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date()),
    data.user?.name,
    data.user?.email,
  ]);
  console.log({ ConnectionData });
  return fetch(PermissionsListUrl + ConnectionData)
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      return data;
    })
    .catch((err) => console.log({ err }));
};
export const authenticateToken = (authHeader: string | undefined, ACCESS_TOKEN_SECRET: string | undefined) => {
  if (!authHeader || !ACCESS_TOKEN_SECRET) return { status: false, data: "no header OR access_token" };
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return { status: false, data: "no token in header" };
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) return { status: false, data: err };
    return { status: true, data: user.userID };
  });
};
