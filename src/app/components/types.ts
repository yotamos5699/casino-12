import { type } from "os";
import { NavSelection } from "./NavComponents/navSelector";

type BannerStyle = {
  buttonColor: string;
  buttonText: string;
  bgColor: string;
};
type Banner = {
  name: string;
  bgImage: string;
  title: string;
  subTitle: string;
  link: NavSelection;
  btnText: string;
  styles: BannerStyle;
};

export type GameType = {
  name: string;
  icon: JSX.Element;
  borderColor: string;
  link: NavSelection;
};

type GameStats = {
  ranking: number;
  activeUsers: number;
};

type Game = {
  name: string;
  bgImage: string;
  stats: GameStats;
  link: NavSelection;
};

export const Banners: Banner[] = [];
