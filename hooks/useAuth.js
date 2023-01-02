import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const { getUser, isLogin, signOut, signIn } = useContext(AuthContext);
  return { getUser, isLogin, signOut, signIn };
}
