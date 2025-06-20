import express from "express";
import { getMovies } from "../controllers/movieController.js";
import { getMovie } from "../controllers/watchListController.js";

const router = express.Router();

router.get("/movies", getMovies);
router.get("/movie/:id", getMovie);

export default router;
