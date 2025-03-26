"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return session ? (
    <button onClick={() => signOut()} className="p-2 bg-red-500 text-white rounded">
      Logout
    </button>
  ) : (
    <button onClick={() => signIn()} className="p-2 bg-blue-500 text-white rounded">
      Login
    </button>
  );
}
