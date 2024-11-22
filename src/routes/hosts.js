import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getHosts from "../services/hosts/getHosts.js";
import createHost from "../services/hosts/createHost.js";
import getHostById from "../services/hosts/getHostById.js";
import deleteHostById from "../services/hosts/deleteHostById.js";
import updateHostById from "../services/hosts/updateHostById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("GET /hosts");
  try {
    const { name } = req.query;
    const hosts = await getHosts(name);
    res.status(200).json(hosts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log(`GET /hosts/${req.params.id}`);
  try {
    const { id } = req.params;
    const host = await getHostById(id);

    if (!host) {
      res.status(404).json({ message: `Host with id ${id} was not found` });
    } else {
      res.status(200).json(host);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  console.log("POST /hosts");
  try {
    const {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    } = req.body;

    // Input validation (add as needed)
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const newHost = await createHost(
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );

    return res.status(201).json({
      message: `Host with id ${newHost.id} successfully added`,
      host: newHost,
    });
  } catch (error) {
    if (error.message?.includes("already taken")) {
      return res.status(409).json({
        message: error.message,
      });
    }
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  console.log(`PUT /hosts/${req.params.id}`);
  try {
    const { id } = req.params;
    const {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    } = req.body;

    const updatedHost = await updateHostById(id, {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    });

    if (updatedHost) {
      res.status(200).send({
        message: `Host with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Host with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log(`DELETE /hosts/${req.params.id}`);
  try {
    const { id } = req.params;
    const deletedHost = await deleteHostById(id);

    if (deletedHost) {
      res.status(200).send({
        message: `Host with id ${id} successfully deleted`,
        host: deletedHost,
      });
    } else {
      res.status(404).json({
        message: `Host with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
