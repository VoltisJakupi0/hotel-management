import { authFeatureName } from "../authSlice";
import { User } from "../models/auth.model";

function getAuthToken(): User | any {
  const storage = localStorage.getItem(authFeatureName);

  if (storage) {
    try {
      const auth = JSON.parse(storage) as User;

      return auth;
    } catch {
      return null;
    }
  }

  return null;
}

function setAuthToken(user: User): void {
  const value = JSON.stringify(user);

  localStorage.setItem(authFeatureName, value);
}

function removeAuthToken(): void {
  localStorage.removeItem(authFeatureName);
}

export { getAuthToken, setAuthToken, removeAuthToken };
