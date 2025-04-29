import "./App.css";
import Headers from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="">
      <Headers />
      <ErrorBoundary>
        <Slider />
      </ErrorBoundary>
      <ProductionHouse />
      <ErrorBoundary>
        <GenreMovieList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
