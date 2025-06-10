import { authClient } from "@/lib/axios/authClient";
import { AuthCredentials, UserProfile } from "@/types";

function register(data: UserProfile): Promise<Partial<UserProfile>> {
  return authClient.post("/sign-up", data);
}

function login(credentials: AuthCredentials): Promise<UserProfile> {
  return authClient.post("/sign-in", credentials);
}

export const authService = {
  register,
  login,
};
