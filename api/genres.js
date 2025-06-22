import mongoose from "mongoose";
import Movie from "./models/movieModel.js";

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
    // Get all distinct genres from the Movie collection
    const genres = await Movie.distinct("genres.name");
    res.status(200).json({ genres });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving genres", error: error.message });
  }
}
