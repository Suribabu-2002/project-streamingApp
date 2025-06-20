import mongoose from "mongoose";

// Sub-schema for image sets (vertical, horizontal posters, backdrops)
const imageSetSchema = new mongoose.Schema(
  {
    w240: { type: String, trim: true },
    w360: { type: String, trim: true },
    w480: { type: String, trim: true },
    w600: { type: String, trim: true },
    w720: { type: String, trim: true },
    w1080: { type: String, trim: true },
    w1440: { type: String, trim: true },
  },
  { _id: false },
);

// Sub-schema for genre objects
const genreSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
  },
  { _id: false },
);

// Sub-schema for service image sets
const serviceImageSetSchema = new mongoose.Schema(
  {
    lightThemeImage: { type: String, required: true, trim: true },
    darkThemeImage: { type: String, required: true, trim: true },
    whiteImage: { type: String, required: true, trim: true },
  },
  { _id: false },
);

// Sub-schema for streaming service details
const serviceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    homePage: { type: String, required: true, trim: true },
    themeColorCode: { type: String, required: true, trim: true },
    imageSet: { type: serviceImageSetSchema, required: true },
  },
  { _id: false },
);

// Sub-schema for addon details (if applicable for a streaming option)
const addonSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    homePage: { type: String, required: true, trim: true },
    themeColorCode: { type: String, required: true, trim: true },
    imageSet: { type: serviceImageSetSchema, required: true },
  },
  { _id: false },
);

// Sub-schema for audio languages
const audioSchema = new mongoose.Schema(
  {
    language: { type: String, required: true, trim: true },
  },
  { _id: false },
);

// Sub-schema for subtitle locales
const subtitleLocaleSchema = new mongoose.Schema(
  {
    language: { type: String, required: true, trim: true },
  },
  { _id: false },
);

// Sub-schema for subtitles
const subtitleSchema = new mongoose.Schema(
  {
    closedCaptions: { type: Boolean, required: true },
    locale: { type: subtitleLocaleSchema, required: true },
  },
  { _id: false },
);

// Sub-schema for individual streaming options
const streamingOptionSchema = new mongoose.Schema(
  {
    service: { type: serviceSchema, required: true },
    type: {
      type: String,
      required: true,
      enum: ["addon", "subscription", "buy", "rent", "free"],
    },
    addon: { type: addonSchema },
    link: { type: String, required: true, trim: true },
    videoLink: { type: String, trim: true },
    quality: { type: String, trim: true },
    audios: { type: [audioSchema], default: [] },
    subtitles: { type: [subtitleSchema], default: [] },
    expiresSoon: { type: Boolean, required: true, default: false },
    availableSince: { type: Number, required: true },
  },
  { _id: false },
);

// Main Movie Schema
const movieSchema = new mongoose.Schema(
  {
    itemType: {
      type: String,
      required: true,
      enum: ["show"],
      default: "show",
    },
    showType: {
      type: String,
      required: true,
      enum: ["movie", "tv_series"],
      default: "movie",
    },
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    imdbId: {
      type: String,
      trim: true,
      sparse: true,
    },
    tmdbId: {
      type: String,
      trim: true,
      sparse: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    overview: {
      type: String,
      trim: true,
    },
    releaseYear: {
      type: Number,
      min: 1888,
      max: new Date().getFullYear() + 10,
    },
    originalTitle: {
      type: String,
      trim: true,
    },
    genres: {
      type: [genreSchema],
      default: [],
    },
    directors: {
      type: [String],
      default: [],
    },
    cast: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
      min: 0,
      max: 100,
    },
    runtime: {
      type: Number,
      min: 0,
    },
    imageSet: {
      verticalPoster: { type: imageSetSchema, required: true },
      horizontalPoster: { type: imageSetSchema, required: true },
      horizontalBackdrop: { type: imageSetSchema, required: true },
    },
    streamingOptions: {
      type: Map,
      of: [streamingOptionSchema],
      default: new Map(),
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
