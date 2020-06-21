import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = ({ data }) => {
    const user = jwtDecode(data);
    setUser(user);
    authStorage.storeToken(result.data);
  };

  return { logIn, logOut, user };
};
