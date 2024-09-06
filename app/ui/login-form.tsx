"use client";

import { Button } from "@/app/ui/button";
import { lusitana } from "@/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { useActionState } from "react";
import {
  authenticate,
  githubAuthenticate,
  googleAuthenticate,
} from "../lib/action";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div>
      <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <Button className="mt-4 w-full" aria-disabled={isPending}>
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
      <div className="mt-6 space-y-2">
        <form action={googleAuthenticate}>
          <button
            className="flex items-center justify-center w-full py-2 px-4 rounded-md bg-[#4285F4] text-white font-medium text-sm hover:bg-[#357ae8] transition"
            type="submit"
            name="action"
            value="google"
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
            >
              <path d="M23.49 12.27c-.62-2.56-1.98-4.73-4.06-6.17-2.09-1.44-4.66-2.19-7.48-2.15-5.77.07-10.46 2.86-14.39 7.35L0 6.68c-2.4 2.6-3.78 6.16-3.8 9.88s1.36 7.17 3.88 9.62L3.12 25c3.96 4.64 8.77 7.07 14.35 7.2 8.67.21 16.02-5.19 18.5-12.3-1.72-.21-3.41-.65-5.09-1.33-1.7-1.49-2.97-3.61-3.63-5.86-.64-2.27-.62-4.65.07-6.86zM22 21.09c-2.57 4.69-7.51 7.91-13.08 7.91-6.33-.05-12.35-4.44-15.21-10.95L0 19.57c3.27 6.52 9.68 10.99 16.45 11.05 8.06-.06 15.08-5.56 18.38-12.62 1.57-3.54 2.09-7.43 1.48-11.15-3.01-11.09-15.49-18.58-27.59-15.21C4.85 2.97.52 7.63 0 12.5c.59 3.76 2.59 7.14 5.52 9.63 1.98 1.49 4.28 2.2 6.61 2.11 5.86-.15 10.99-4.71 13.34-10.3-.12.03-.24.06-.36.09-1.82.48-3.71.7-5.59.56z"></path>
            </svg>
            Sign In With Google
          </button>
        </form>

        <form action={githubAuthenticate}>
          <button
            className="flex items-center justify-center w-full py-2 px-4 rounded-md bg-[#333] text-white font-medium text-sm hover:bg-[#24292e] transition"
            type="submit"
            name="action"
            value="github"
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.43 7.58.4.07.55-.17.55-.38v-1.48c-2.23.48-2.7-1.07-2.7-1.07-.37-.95-.91-1.2-.91-1.2-.74-.5.06-.49.06-.49.82.06 1.25.85 1.25.85.73 1.25 1.9.88 2.36.68.07-.53.29-.88.53-1.08-1.8-.2-3.68-.9-3.68-4v-.06c.7-.55 1.24-1.58 1.24-2.74 0-1.28-.46-2.31-1.23-3.14.12-.3.53-1.48-.11-3.08 0 0 1.03-.33 3.38 1.26.98-.27 2.04-.4 3.08-.4s2.1.13 3.08.4c2.35-1.59 3.38-1.26 3.38-1.26-.64 1.6-.23 2.78-.11 3.08.77.83 1.23 1.87 1.23 3.14 0 1.16-.44 2.19-1.24 2.74v.06c0 3.11-1.88 3.8-3.69 4-.29.24-.54.71-.54 1.43v2.12c0 .22.15.45.56.37C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Sign In With GitHub
          </button>
        </form>
      </div>
    </div>
  );
}
