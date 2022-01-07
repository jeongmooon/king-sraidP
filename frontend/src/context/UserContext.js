import { createContext } from "react";

export default createContext({
  user: {},
  setUser: () => {},

  isLoggedIn: Boolean,
  setIsLoggedIn: () => {},
});
