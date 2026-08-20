// hooks/useAuth.ts
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const token = Cookies.get("authtoken");
    setAuthenticated(!!token);
  }, []);

  return authenticated;
};

