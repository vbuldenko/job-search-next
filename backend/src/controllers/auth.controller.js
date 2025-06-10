import { ApiError } from "../exceptions/api.error.js";
import * as userService from "../services/user.service.js";
import { comparePasswords } from "../utils/index.js";

export const register = async (req, res) => {
  const { name, email, password, desiredJobTitle, aboutMe } = req.body;
  if (!name || !email || !password || !desiredJobTitle || !aboutMe) {
    throw ApiError.BadRequest("All fields are required");
  }

  const user = await userService.create({ ...req.body });
  res.status(201).json(user);
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

  res.send(user);
};
