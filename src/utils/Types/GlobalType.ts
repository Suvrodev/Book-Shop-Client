export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  isBlocked: boolean;
  iat: number;
  exp: number;
};
