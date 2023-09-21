import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import ToggleTheme from "../ToggleTheme";
import { AppTheme } from "../Style";

// import { ReactComponent as Logo } from './logotype.svg'
export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <nav className={AppTheme.nav}>
      <ToggleTheme Style="" />
      <div className="w-1/2 ">
        <ul className="flex items-center justify-between ">
          {!session ? (
            <li>
              <Link className="Nav" href="/api/auth/signin">
                התחבר
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link className="Nav" href="/api/auth/signout">
                  Dorbai
                </Link>
              </li>
              <li>
                <Link className="Nav" href="/budjet">
                  dorbaiov
                </Link>
              </li>
              <li>
                <Link className="Nav" href="/stock">
                  kagdila
                </Link>
              </li>
              <li>
                <Link className="Nav" href="/sells">
                  blatt!
                </Link>
              </li>
            </>
          )}
          <li>
            <img width={60} src="/logotype.svg" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
