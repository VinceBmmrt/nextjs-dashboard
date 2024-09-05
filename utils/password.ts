// utils/password.ts
import bcrypt from "bcryptjs";

// Function to salt and hash a password
export const saltAndHashPassword = async (
  password: string
): Promise<string> => {
  const saltRounds = 10; // You can adjust the salt rounds as needed
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Optional: Function to verify the password
export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
