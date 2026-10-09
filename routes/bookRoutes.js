import express from "express";
import { bookController } from "../controllers/bookController.js";

const router = express.Router();

// CREATE
router.post("/books", bookController.create);

// READ ALL
router.get("/books", bookController.getAll);

// READ ONE
router.get("/books/:id", bookController.getOne);

// UPDATE
router.put("/books/:id", bookController.update);

// DELETE
router.delete("/books/:id", bookController.delete);

export default router;