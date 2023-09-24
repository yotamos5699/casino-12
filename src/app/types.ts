import { type } from "os";
import { NavSelection } from "./components/NavComponents/navSelector";
export type Routs = "affiliate" | "partners" | "promotions" | "home" | "login";
export type User = {
  name: string;
  email: string;
  image: string;
  admin: boolean;
};
type CardStyle = {
  btnColor: number;
  btnTextColor: number;
  bgColor: number;
};

type PromotionStats = {
  game: string;
  minDeposit: number;
  bonus: number;
  multi: number;
  validDate: string;
  activation: string;
};
export type GenericCardType = {
  id: string;
  name: string;

  imagesArray: string;
  title: string;
  subTitle: string;
};

type GameStats = {
  ranking: number;
  downLoads: number;
};
export type Stat_ = { title: string; values: any[] };
export type Banner_ = GenericCardType & { route: Routs; btnText: string; styles: CardStyle; crownText: string; trophyText: string };
export type Promotion_ = GenericCardType & {
  styles: CardStyle;
  stats: PromotionStats;
};
export type Game_ = GenericCardType & {
  styles: CardStyle;
  flag: { type: "prec" | "word" | "num"; color: number; val: any };
  stats: GameStats;
};
