import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { options } from "../../api/auth/[...nextauth]/options";
import ToggleTheme from "../../ToggleTheme";
import { AppTheme } from "../../Style";

// import { ReactComponent as Logo } from './logotype.svg'
export default async function ServerUpperNav({ ...props }: React.HTMLAttributes<HTMLElement>) {
  const session = await getServerSession(options);
  return (
    <nav className={props.className}>
      <ToggleTheme className={" text-3xl"} />

      <div className="w-1/2 ">
        <ul className="flex items-center justify-between ">
          {!session ? (
            <li className={`Nav`}>
              <Link href="/api/auth/signin">התחבר</Link>
            </li>
          ) : (
            <>
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
                <Link href="/sells">blatt!</Link>
              </li>
              <li className={`Nav`}>
                <Link href="/screens/Bonuses">Bonuses!</Link>
              </li>
            </>
          )}

          <li className={`Nav`}>
            <img width={60} src="/logotype.svg" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
