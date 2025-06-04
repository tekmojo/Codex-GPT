"use client";

import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Sign In</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
}
