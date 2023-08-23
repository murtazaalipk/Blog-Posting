import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  const userName = "Murtaza";

  return (
    <header>
      <nav className="h-10 bg-purple-600 flex items-center pl-40 justify-between">
        <h1 className="text-white font-bold text-xl">Personal Blogging App</h1>
        <div className="">
          <div className="  mr-20  ">
            {!session ? (
              <Link
                href="/auth/login"
                className="text-white text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Log in
              </Link>
            ) : null}

            {session ? (
              <>
                <button onClick={signOut} className="text-white">
                  Log out
                </button>
                <Link
                  href="/profile"
                  className="text-white text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                >
                  {userName}
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
