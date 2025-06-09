import { ApiError } from "../exceptions/api.error.js";
import * as userService from "../services/user.service.js";
import { comparePasswords } from "../utils/index.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw ApiError.BadRequest("Name, email, and password are required");
  }

  await userService.create({ name, email, password });
  res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getByEmail(email);
  if (!user) {
    throw ApiError.NotFound({ user: "Invalid user data" });
  }

  const isPasswordValid = await comparePasswords(password, user.password);
  if (!isPasswordValid) {
    throw ApiError.BadRequest("Invalid credentials");
  }

  res.send({
    user,
  });
};
