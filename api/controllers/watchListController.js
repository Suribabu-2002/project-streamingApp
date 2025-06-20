import Movie from "../models/movieModel.js";
import WatchList from "../models/watchListModal.js";
import getPagination from "../utils/getPagination.js";

export const postWatchlist = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id))
      return res.status(400).json({ message: "Invalid ID format" });

    if (!req.body)
      return res.status(400).json({ message: "body is mismatched or Empty" });

    const exists = await WatchList.findOne({ id });
    if (exists) {
      return res.status(409).json({ message: "Watchlist item already exists" });
    }

    const { title, showType, imdbId } = req.body;
    const newWatchList = new WatchList({
      id,
      title,
      showType,
      imdbId,
    });
    await newWatchList.save();
    res
      .status(201)
      .json({ message: "Watchlist item added", data: newWatchList });
  } catch (error) {
    console.error("Error fetching watchList:", error);
    res
      .status(500)
      .json({ message: "Error posting watchList", error: error.message });
  }
};

export const getWatchlist = async (req, res) => {
  try {
    let filter = {};
    const { page, limit, skip } = getPagination(req);
    // Get all ids from WatchList
    const watchListIds = await WatchList.find(filter).distinct("id");
    // Find movies whose id is in watchListIds
    const movies = await Movie.find({ id: { $in: watchListIds } })
      .skip(skip)
      .limit(limit)
      .lean();
    const total_movies = await Movie.countDocuments({
      id: { $in: watchListIds },
    });
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

export const deleteWatchlist = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = await WatchList.findOneAndDelete({ id });
    if (!deleted) {
      return res.status(404).json({ message: "Watchlist item not found" });
    }
    res.status(200).json({ message: "Watchlist item deleted" });
  } catch (error) {
    console.error("Error deleting watchList:", error);
    res
      .status(500)
      .json({ message: "Error deleting watchList", error: error.message });
  }
};
