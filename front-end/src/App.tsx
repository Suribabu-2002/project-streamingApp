import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header";
import Watchlist from "./pages/watchlist";
import Movie from "./pages/Movie";

const App: React.FC = () => {
  return (
    <Router>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch-list" element={<Watchlist />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
