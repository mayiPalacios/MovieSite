import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return isLoggedIn;
}
