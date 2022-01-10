import { useSelector } from "react-redux";
import { authUserSelector } from "../selectors/auth.selectors";

function useHasAdminRole(): boolean {
  const authUser: any = useSelector(authUserSelector);

  return authUser?.data?.user?.role_id == 3 ? false : true;
}

export default useHasAdminRole;
