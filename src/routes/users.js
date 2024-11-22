import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getUsers from "../services/users/getUsers.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("GET /users - Request received:", { query: req.query });
  try {
    const { email, username } = req.query;
    const users = await getUsers(email, username);
    console.log(`Found ${users.length} users`);

    const usersWithoutPassword = users.map(
      ({ password, ...userWithoutPassword }) => userWithoutPassword
    );
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.error("Error in GET /users:", error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log("GET /users/:id - Request received:", { params: req.params });
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log("User found:", user ? "Yes" : "No");

    if (!user) {
      console.log(`User with id ${id} not found`);
      res.status(404).json({ message: `User with id ${id} was not found` });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(`Error in GET /users/${req.params.id}:`, err);
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  console.log("POST /users - Request received:", {
    body: { ...req.body, password: "***" }, // Hide password in logs
  });
  try {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;

    const newUser = await createUser(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture
    );
    console.log("User creation result:", newUser ? "Success" : "Failed");

    if (newUser) {
      console.log(`New user created with id: ${newUser.id}`);
      res.status(201).json({
        message: `User with id ${newUser.id} successfully added`,
        user: newUser,
      });
    } else {
      console.warn(
        "User creation failed - no error thrown but no user returned"
      );
      res.status(400).json({
        message: "User creation error",
      });
    }
  } catch (error) {
    console.error("User creation error:", {
      error: error.message,
      stack: error.stack,
    });
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  console.log("PUT /users/:id - Request received:", {
    params: req.params,
    body: { ...req.body, password: "***" }, // Hide password in logs
  });
  try {
    const { id } = req.params;
    const { name, username, password, email, phoneNumber, profilePicture } =
      req.body;

    const updatedUser = await updateUserById(id, {
      id,
      name,
      username,
      password,
      email,
      phoneNumber,
      profilePicture,
    });
    console.log("User update result:", updatedUser ? "Success" : "Not Found");

    if (updatedUser) {
      console.log(`User ${id} successfully updated`);
      res.status(200).send({
        message: `User with id ${id} successfully updated`,
      });
    } else {
      console.log(`Update failed - User ${id} not found`);
      res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }
  } catch (error) {
    console.error(`Error updating user ${req.params.id}:`, error);
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log("DELETE /users/:id - Request received:", { params: req.params });
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    console.log("User deletion result:", deletedUser ? "Success" : "Not Found");

    if (deletedUser) {
      console.log(`User ${id} successfully deleted`);
      res.status(200).send({
        message: `User with id ${id} successfully deleted`,
        user: deletedUser,
      });
    } else {
      console.log(`Deletion failed - User ${id} not found`);
      res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }
  } catch (error) {
    console.error(`Error deleting user ${req.params.id}:`, error);
    next(error);
  }
});

export default router;
