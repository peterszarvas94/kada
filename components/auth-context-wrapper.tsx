"use client";

import { AuthContextProvider } from "@/client/auth-context";
import { ReactNode } from "react";

interface AuthContextWapperProps {
  children: ReactNode;
}
export function AuthContextWrapper({ children }: AuthContextWapperProps) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}
