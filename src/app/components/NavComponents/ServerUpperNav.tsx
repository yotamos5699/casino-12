import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { options } from "../../api/auth/[...nextauth]/options";
import ToggleTheme from "../../ToggleTheme";
import Image from "next/image";

// import { ReactComponent as Logo } from './logotype.svg'
export default async function ServerUpperNav({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const session = await getServerSession(options);
  return (
    <nav className={props.className}>
      <div className={"flex gap-2"}>
        {session?.user && (
          <>
            {" "}
            <Image src={session?.user?.image ?? ""} alt="" height={30} width={30} />
            <p className="text-slate-100">
              <span>hi</span> <span className="font-bold">{session.user.name}</span>
            </p>
          </>
        )}
        <ToggleTheme className={" text-3xl"} />
      </div>

      <div className="w-1/2 ">
        <ul className="flex items-center justify-between ">
          {!session ? (
            <li className={`Nav`}>
              <Link href="/api/auth/signin">התחבר</Link>
            </li>
          ) : (
            <div className="hidden md:flex">
              <li className={`Nav`}>
                <Link href="/api/auth/signout">Dorbai</Link>
              </li>
              <li className={`Nav`}>
                <Link href="/budjet">dorbaiov</Link>
              </li>
              <li className={`Nav`}>
                <Link href="/stock">kagdila</Link>
              </li>
              <li className={`Nav`}>
                <Link href="/screens/Sports">Sports</Link>
              </li>
              <li className={`Nav`}>
                <Link href="/screens/Bonuses">Bonuses!</Link>
              </li>
            </div>
          )}

          <li className={`Nav cursor-pointer`}>
            <Link href="/screens/Home">
              <Image width={60} height={30} alt="" src="/logotype.svg" />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
