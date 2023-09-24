import { cache } from "react";
import { BASE_URL } from "../page";
import { Routs } from "../types";

export type FileNamesReturnType =
  | ({} & {
      status: true;
      data: string[];
      folder: Folders;
    })
  | {
      status: boolean;
      data: string;
      folder: Folders;
    };
export type Folders = "lobby" | "loyalty" | "pay-systems" | "providers";

const ScreenToFoldersHash: Record<string, Folders[]> = {
  home: ["lobby", "loyalty", "pay-systems"],
};

const ScreensWithStaticFiles = ["home"];
export const getFilesNames = cache(
  async (folder: Folders): Promise<FileNamesReturnType> =>
    await fetch(BASE_URL + "api/fileNames?folder=" + folder)
      .then(async (res) => res.json())
      .then((data) => data)
      .catch((err) => console.log({ err }))
);

export const getScreenApiData = cache(async (screen: Routs) => {
  if (!ScreensWithStaticFiles.includes(screen)) return null;
  const CurrentFolders = ScreenToFoldersHash[screen as keyof typeof ScreenToFoldersHash];
  console.log({ CurrentFolders, screen });
  let Requests = CurrentFolders.map((folder) => getFilesNames(folder));
  const results = await Promise.allSettled(Requests).then((resaults) =>
    resaults.map((res, i) => (res.status === "fulfilled" ? res.value : { status: false, data: "error", folder: CurrentFolders[i] }))
  );
  return results;
});
