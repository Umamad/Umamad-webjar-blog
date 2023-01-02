import { createContext, useState, useCallback, useMemo } from "react";
import { cookiesNameSpaces } from "../utils/namespaces";
import { getCookie, removeCookies, setCookie } from "cookies-next";

const { AUTHENTICATION } = cookiesNameSpaces;

const currentUser = getCookie(AUTHENTICATION) || null;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    currentUser ? JSON.parse(currentUser) : currentUser
  );

  const signIn = useCallback((newUser) => {
    setCookie(AUTHENTICATION, newUser);
    setUser(newUser);
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    removeCookies(AUTHENTICATION);
  }, []);

  const getUser = useCallback(() => {
    let _user;
    if (user && typeof user === "object") _user = { ...user };
    else _user = user;
    return _user;
  }, []);

  const isLogin = useMemo(() => !!user, [user]);

  return (
    <AuthContext.Provider value={{ getUser, isLogin, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
