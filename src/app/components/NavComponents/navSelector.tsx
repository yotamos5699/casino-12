const DetailesSvg = () => <svg></svg>;
const userContext = { id: "sdsdaes", name: "yotam" };

import { ReactComponentElement } from "react";

type UrlParams = {};

export type NavSelection = {} & (
  | ({
      type: "client";
      text?: string;
      component?: JSX.Element;
      screen: string;
    } & {})
  | {
      type: "server";
      text?: string;
      component?: JSX.Element;
      rout: string;
      urlParams: UrlParams;
    }
  | {
      type: "banner";
      text?: string;
      component?: JSX.Element;
      rout: string;
    }
);

export const NavButtons: NavSelection[] = [
  { type: "server", rout: "/usersdata", urlParams: { id: userContext.id }, text: "מידע" },
  { type: "client", screen: "payments", component: <DetailesSvg /> },
];
