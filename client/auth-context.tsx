import { auth } from "@/server/firebase";
import { User } from "firebase/auth";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Overlay = "sign-in-form" | "sign-up-form" | "none";

type Context = {
  overlay: Overlay;
  setOverlay: Dispatch<SetStateAction<Overlay>>;

  user: User | null;
};

export const AuthContext = createContext<Context | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        overlay,
        setOverlay,

        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuthContext must be used within a AuthContext.Provider");
  }

  return context;
}
