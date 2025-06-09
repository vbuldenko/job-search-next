import bcrypt from "bcrypt";

export function hashPassword(password, saltRounds = 10) {
  return bcrypt.hash(password, saltRounds);
}
export const comparePasswords = (plainPWD, userPWDHash) => {
  return bcrypt.compare(plainPWD, userPWDHash);
};
