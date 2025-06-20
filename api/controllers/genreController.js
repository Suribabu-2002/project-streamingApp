import Movie from "../models/movieModel.js";

export const getGenres = async (req, res) => {
  try {
    // Get all distinct genres from the Movie collection
    const genres = await Movie.distinct("genres.name");

    res.status(200).json({
      genres,
    });
  } catch (error) {
    console.error("Error fetching genres:", error);
    res
      .status(500)
      .json({ message: "Error retrieving genres", error: error.message });
  }
};
