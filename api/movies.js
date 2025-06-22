import mongoose from "mongoose";
import Movie from "./models/movieModel.js";
import getPagination from "./utils/getPagination.js";

// Use a global cached connection for serverless
let cached = globalThis.mongoose;
if (!cached) {
  cached = globalThis.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI)
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default async function handler(req, res) {
  await connectDB();
  try {
    // Accept genre and title as query params
    let filter = {};
    if (req.query.genre) {
      const genres = req.query.genre.split(",").map((genre) => genre.trim());
      filter["genres.name"] = { $in: genres };
    }
    if (req.query.title) {
      filter.title = { $regex: req.query.title, $options: "i" };
    }

    if (req.query.topShows) {
      const topShows = req.query.topShows;
      const topLimit = Number(topShows) || 10;
      const movies = await Movie.find({})
        .sort({ rating: -1 })
        .limit(topLimit)
        .lean();
      return res.status(200).json({
        total_movies: movies.length,
        page: 1,
        limit: topLimit,
        total_pages: 1,
        movies,
      });
    }

    // Pagination
    const { page, limit, skip } = getPagination(req);
    const total_movies = await Movie.countDocuments(filter);
    const movies = await Movie.find(filter).skip(skip).limit(limit).lean();
    res.status(200).json({
      total_movies,
      page,
      limit,
      total_pages: Math.ceil(total_movies / limit),
      movies,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res
      .status(500)
      .json({ message: "Error retrieving movies", error: error.message });
  }
}
