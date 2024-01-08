"use client";

import type { FormEvent } from "react";
import { auth } from "@/server/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAuthContext } from "@/client/auth-context";
import { CloseFormButton } from "./form-close-button";

export function SignUpForm() {
  const { setOverlay } = useAuthContext();

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const rawFormData = {
      rawEmail: formData.get("email"),
      rawPassword: formData.get("password"),
    };

    if (!rawFormData.rawEmail || !rawFormData.rawPassword) {
      alert("Missing email or password");
      return;
    }

    const email = rawFormData.rawEmail as string;
    const password = rawFormData.rawPassword as string;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setOverlay("none");
    } catch (error) {
      alert("Something went wrong");
      return;
    }
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      alert("Signed in as " + user.user?.email);
      setOverlay("none");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div className="absolute flex min-h-screen w-full items-center justify-center bg-gray-100">
      <CloseFormButton />
      <div className="w-full max-w-md rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold">Sign up</h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="w-full rounded-md border p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              className="w-full rounded-md border p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
          >
            Sign up with Email
          </button>
        </form>
        <div className="mt-4 flex gap-2">
          <span>Already registered?</span>
          <button
            onClick={() => setOverlay("sign-in-form")}
            className="text-blue-500 hover:text-blue-600"
          >
            Sign in
          </button>
        </div>
        <div className="mt-4">
          <p className="flex justify-center text-sm text-gray-700">- or -</p>
          <button
            onClick={signInWithGoogle}
            className="mt-2 w-full rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}

