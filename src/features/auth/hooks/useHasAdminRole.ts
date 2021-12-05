import { useSelector } from "react-redux";
import { authUserSelector } from "../selectors/auth.selectors";

function useHasAdminRole(): boolean {
  const authUser = useSelector(authUserSelector);

  return authUser?.name == "dr / Daniel Rausch" ? true : false;
}

export default useHasAdminRole;
