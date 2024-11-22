import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getUsers from "../services/users/getUsers.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";
import getUserByName from "../services/users/getUserByName.js";
import getUserByUsername from "../services/users/getUserByUsername.js";

const router = express.Router();

// Error handler wrapper to avoid repetitive try-catch blocks
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Get users with optional filtering
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { email, username } = req.query;
    const users = await getUsers(email, username);

    const sanitizedUsers = users.map(({ password, ...user }) => user);
    res.json(sanitizedUsers);
  })
);

// Get user by ID
router.get(
  "/id/:id",
  asyncHandler(async (req, res) => {
    const user = await getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: `User with id ${req.params.id} not found`,
      });
    }

    const { password, ...sanitizedUser } = user;
    res.json(sanitizedUser);
  })
);

// Get user by username or name
router.get(
  "/search",
  asyncHandler(async (req, res) => {
    const { username, name } = req.query;

    if (!username && !name) {
      return res.status(400).json({
        message: "Please provide either username or name parameter",
      });
    }

    const user = username
      ? await getUserByUsername(username)
      : await getUserByName(name);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const { password, ...sanitizedUser } = user;
    res.json(sanitizedUser);
  })
);

// Create new user
router.post(
  "/",
  auth,
  asyncHandler(async (req, res) => {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;

    // Basic validation
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "Username, password, and email are required",
      });
    }

    const newUser = await createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );

    if (!newUser) {
      return res.status(400).json({
        message: "User creation failed",
      });
    }

    const { password: _, ...sanitizedUser } = newUser;
    res.status(201).json({
      message: `User successfully created with id ${newUser.id}`,
      user: sanitizedUser,
    });
  })
);

// Update user
router.put(
  "/:id",
  auth,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      id,
    };

    const updatedUser = await updateUserById(id, updateData);

    if (!updatedUser) {
      return res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }

    res.json({
      message: `User with id ${id} successfully updated`,
    });
  })
);

// Delete user
router.delete(
  "/:id",
  auth,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }

    const { password, ...sanitizedUser } = deletedUser;
    res.json({
      message: `User with id ${id} successfully deleted`,
      user: sanitizedUser,
    });
  })
);

export default router;
