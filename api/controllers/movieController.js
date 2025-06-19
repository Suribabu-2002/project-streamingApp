import Movie from "../models/movieModel.js";
import getPagination from "../utils/getPagination.js";

export const getMovies = async (req, res) => {
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
};
