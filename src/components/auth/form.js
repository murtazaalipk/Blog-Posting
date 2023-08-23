import Link from "next/link";
import { useRef } from "react";

export default function Form({ signin, onFormSubmit }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const FnameRef = useRef();
  const LnameRef = useRef();

  const onSubmitHandler = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    if (signin) {
      onFormSubmit(email, password);
    } else {
      if (!signin) {
        const fname = FnameRef.current.value;
        const lname = LnameRef.current.value;
        onFormSubmit(email, password, fname, lname);
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            {!signin ? (
              <>
                <div>
                  <div className="mt-2">
                    <input
                      id="FirstName"
                      name="FirstName"
                      type="text"
                      placeholder="  First Name"
                      ref={FnameRef}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <input
                      id="LastName"
                      name="LastName"
                      type="text"
                      placeholder="  LastName"
                      ref={LnameRef}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </>
            ) : null}

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="  Email"
                  ref={emailRef}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="   Password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href={signin ? "/auth/signup" : "/auth/login"}
                  className="font-semibold text-purple-600 hover:text-indigo-500"
                >
                  {signin ? "For SignUp Click Here" : "For Login Click Here"}
                </Link>
              </div>
            </div>
            <div>
              {signin ? (<>                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {signin ? "Sign in" : "Sign up"}
                </button>
              
              </>) : (<>
                <Link href="/auth/login">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {signin ? "Sign in" : "Sign up"}
                </button>
              </Link>
              
              </>) }
     
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
