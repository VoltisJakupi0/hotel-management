import { useMemo } from "react";
import { useSelector } from "react-redux";
import { authUserSelector } from "../selectors/auth.selectors";

function useHasRole(role: string): boolean {
  const authUser = useSelector(authUserSelector);

  // const hasRole = useMemo<boolean>(() => {
  //   return !!authUser && authUser.roles.some((r) => r.name === role)
  // }, [authUser, role])

  return false;
}

export default useHasRole;
