import mongoose from "mongoose";

const WatchListSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: false },
  showType: { type: String, required: false },
  imdbId: { type: String, required: false },
});

const WatchList = mongoose.model("watchList", WatchListSchema);

export default WatchList;
