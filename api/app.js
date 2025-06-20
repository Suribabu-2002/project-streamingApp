import { configDotenv } from "dotenv";
import express from "express";
import { home } from "./constants/constants.js";
import connectDB from "./dataBase/dataBaseConfig.js";
import movieRoutes from "./routes/movieRoutes.js";
import genreRoutes from "./routes/genresRoute.js";
import watchListRoutes from "./routes/watchListRoute.js";

configDotenv();
const app = express();
app.use(express.json());
connectDB();

// Home route
app.get("/", (req, res) => {
  res.json(home).status(200);
});

// Route handlers
app.use("/", genreRoutes); // This will handle /genres
app.use("/", movieRoutes); // This will handle /movies
app.use("/", watchListRoutes);

const port = process.env.PORT_NO || 8080;
app.listen(port, () => console.log(`your port is running on ${port} `));
