import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

import { AppTheme } from "./Style";

import { redirect } from "next/navigation";
import { getUserRelatedData } from "./utils/fetchHelper";
const DEV = true;
export const BASE_URL = DEV ? "http://localhost:3000/" : "https://casino-12.vercel.app/";

export default async function Home() {
  const session = await getServerSession(options);
  const Users = await getUserRelatedData({ session, token: crypto.randomUUID(), rout: "login" });
  if (!Users) return <h1>"וואי וואי בלגן"</h1>;

  const permittedUsersEmaailList = Users.map((user) => user.email);
  const sessionAllowed = permittedUsersEmaailList.includes(session?.user?.email ?? "");
  if (sessionAllowed) {
    redirect("/screens/HomeScreen");
  }
  return (
    <>
      {!session ? (
        <main>
          <div className="z-10 max-w-5xl   items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started with your acount&nbsp;
              <code className="font-mono font-bold">casino</code>
            </p>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                By bla bla
              </a>
            </div>
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <Link
              href="/api/auth/signin"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Conect
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>dorbaiov blatt!! with&nbsp;quizzes!</p>
            </Link>
          </div>
        </main>
      ) : (
        <h2>אסור כפרה</h2>
      )}
    </>
  );
}
// git remote add upstream https://github.com/yotamos5699/casino-12.git
