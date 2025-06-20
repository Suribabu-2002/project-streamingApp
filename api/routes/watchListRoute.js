import express from "express";
import {
  deleteWatchlist,
  getWatchlist,
  postWatchlist,
} from "../controllers/watchListController.js";

const router = express.Router();

router.post("/watchList/:id", postWatchlist);
router.get("/watch-list", getWatchlist);
router.delete("/watchList/:id", deleteWatchlist);

export default router;
