import { useMemo } from "react";
import { useSelector } from "react-redux";
import { authUserSelector } from "../selectors/auth.selectors";

function useHasRole(role: string): boolean {
  const authUser: any = useSelector(authUserSelector);

  return authUser?.data?.user?.role_id == 3 ? false : true;
}

export default useHasRole;
