import mongoose from "mongoose";
import WatchList from "./models/watchListModal.js";

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
    if (req.method === "GET") {
      // Get all watchlist items
      const watchList = await WatchList.find({}).lean();
      return res.status(200).json({ watchList });
    } else if (req.method === "POST") {
      // Add a new item to the watchlist
      const newItem = new WatchList(req.body);
      await newItem.save();
      return res
        .status(201)
        .json({ message: "Added to watchlist", item: newItem });
    } else if (req.method === "DELETE") {
      // Remove an item from the watchlist by id
      const { id } = req.query;
      if (!id) return res.status(400).json({ message: "Missing id" });
      await WatchList.findByIdAndDelete(id);
      return res.status(200).json({ message: "Removed from watchlist" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error handling watchlist", error: error.message });
  }
}
