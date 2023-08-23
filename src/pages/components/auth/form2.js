import Link from "next/link";
import { useRef } from "react";

export default function Form2({ signin /* onFormSubmit */ }) {
/*   const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmitHandler = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    e.preventDefault();
    onFormSubmit(email, password);
  } */
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
{/*             {signin ? "Sign in to your account" : "Signup for new account"} */}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" /* onSubmit={onSubmitHandler} */  >
          <div>
              <div className="flex items-center justify-between">
           
              </div>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="  Email"
/*                   ref={emailRef} */
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
         
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
/*                   ref={passwordRef} */
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
            </div>
            <div>
              <button
                type="submit"
                className=" flex items-center justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold  text-white shadow-sm  ml-36"
              >SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}