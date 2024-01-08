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

  authLoaded: boolean;
};

export const AuthContext = createContext<Context | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [user, setUser] = useState<User | null>(null);
  const [authLoaded, setAuthLoaded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setAuthLoaded(true);
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

        authLoaded,
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
