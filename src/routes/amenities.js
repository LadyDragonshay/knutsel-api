import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenity.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import deleteAmenityById from "../services/amenities/deleteAmenityById.js";
import updateAmenityById from "../services/amenities/updateAmenityById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("GET /amenities");
  try {
    const amenities = await getAmenities();
    res.status(200).json(amenities);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log(`GET /amenities/${req.params.id}`);
  try {
    const { id } = req.params;
    const amenity = await getAmenityById(id);

    if (!amenity) {
      res.status(404).json({ message: `Amenity with id ${id} was not found` });
    } else {
      res.status(200).json(amenity);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  console.log("POST /amenities");
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "All fields are required: name",
      });
    }

    const newAmenity = await createAmenity({ name });
    res.status(201).send({
      message: `Account successfully created`,
      newAmenity,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  console.log(`PUT /amenities/${req.params.id}`);
  try {
    const { id } = req.params;
    const { name } = req.body;
    const amenity = await updateAmenityById(id, { name });

    if (!amenity || amenity.count === 0) {
      res.status(404).json({
        message: `Amenity with id ${id} was not found`,
      });
    } else {
      res.status(200).send({
        message: `Amenity with id ${id} successfully updated`,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log(`DELETE /amenities/${req.params.id}`);
  try {
    const { id } = req.params;
    const amenity = await deleteAmenityById(id);

    if (!amenity || amenity.count === 0) {
      res.status(404).json({
        message: `Amenity with id ${id} was not found`,
      });
    } else {
      res.status(200).send({
        message: `Amenity with id ${id} successfully deleted`,
      });
    }
  } catch (err) {
    next(err);
  }
});

export default router;
