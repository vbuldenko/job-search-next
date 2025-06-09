import User from "../db/models/user.js";
import { ApiError } from "../exceptions/api.error.js";
import { hashPassword } from "../utils/index.js";

const getByEmail = async (email) => {
  return User.findOne({ email });
};

const create = async (user) => {
  const existingUser = await getByEmail(user.email);
  if (existingUser) {
    throw ApiError.BadRequest("User already exists");
  }
  const hash = await hashPassword(user.password);

  const newUser = new User({
    ...user,
    email: user.email.toLowerCase(),
    password: hash,
  });
  await newUser.save();
};

export { getByEmail, create };
