import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getProperties from "../services/properties/getProperties.js";
import createProperty from "../services/properties/createProperty.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import deletePropertyById from "../services/properties/deletePropertyById.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("GET /properties");
  try {
    const { location, pricePerNight } = req.query;
    const properties = await getProperties(location, pricePerNight);
    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log(`GET /properties/${req.params.id}`);
  try {
    const { id } = req.params;
    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).json({ message: `Property with id ${id} not found` });
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", auth, async (req, res, next) => {
  console.log("POST /properties");
  try {
    const {
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    } = req.body;

    if (
      !title ||
      !description ||
      !location ||
      !pricePerNight ||
      !bedroomCount ||
      !bathRoomCount ||
      !maxGuestCount ||
      !hostId ||
      !rating
    ) {
      return res.status(400).json({
        message:
          "All fields are required: title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating",
      });
    }

    const newProperty = await createProperty({
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating,
    });
    return res.status(201).json({
      message: `Property successfully created`,
      property: newProperty,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  console.log(`PUT /properties/${req.params.id}`);
  const { id } = req.params;
  const {
    title,
    description,
    location,
    pricePerNight,
    bedroomCount,
    bathRoomCount,
    maxGuestCount,
    hostId,
    rating,
  } = req.body;
  try {
    const updatedProperty = await updatePropertyById(
      id,
      title,
      description,
      location,
      pricePerNight,
      bedroomCount,
      bathRoomCount,
      maxGuestCount,
      hostId,
      rating
    );
    if (!updatedProperty) {
      res.status(404).json(updatedProperty);
    } else {
      res.status(200).json(updatedProperty);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log(`DELETE /properties/${req.params.id}`);
  try {
    const { id } = req.params;
    const deletedProperty = await deletePropertyById(id);

    if (deletedProperty) {
      res.status(200).send({
        message: `Property with id ${id} successfully deleted`,
        property: deletedProperty,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
