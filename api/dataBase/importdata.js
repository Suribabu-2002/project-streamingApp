import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import Movie from "../models/movieModel.js";

const drama = JSON.parse(
  readFileSync(join(__dirname, "../../mock7.json"), "utf8"),
);
const moviesArray = drama.shows;

const DB_URI = process.env.MONGO_URI;

async function connectAndImport() {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected successfully for import!");

    // Insert only documents that do not already exist (skip duplicates)
    let inserted = 0,
      skipped = 0;
    for (const movie of moviesArray) {
      const exists = await Movie.exists({ id: movie.id });
      if (!exists) {
        await Movie.create(movie);
        inserted++;
      } else {
        skipped++;
      }
    }
    console.log(`Inserted: ${inserted}, Skipped (duplicates): ${skipped}`);
  } catch (err) {
    console.error("Error during movie import:", err);
    if (err.name === "MongoBulkWriteError") {
      console.error(
        "Some documents might have failed to insert. Details:",
        err.writeErrors,
      );
    }
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed after import.");
  }
}
export default connectAndImport;
