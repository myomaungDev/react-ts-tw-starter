import React, { createContext, useContext, useState } from "react";
import { userProps } from "../Interfaces/uset";

export type AuthContextType = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  user?: userProps;
  setUser: React.Dispatch<React.SetStateAction<userProps | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = (): AuthContextType => {
  try {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuthContext must be within Auth Context Provider.");
    } else {
      return context;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

interface props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<props> = ({ children }) => {
  const [isAuth, setisAuth] = useState<boolean>(false);
  const [accessToken, setaccessToken] = useState<string>("");
  const [user, setuser] = useState<userProps | undefined>(undefined);
  return (
    <React.Fragment>
      <AuthContext.Provider
        value={{
          user: user,
          setUser: setuser,
          accessToken: accessToken,
          setAccessToken: setaccessToken,
          isAuth: isAuth,
          setIsAuth: setisAuth,
        }}
      >
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};
