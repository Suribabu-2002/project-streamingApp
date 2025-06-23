import React, { useEffect } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/GenreMovieList";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) loginWithRedirect();
  }, [isAuthenticated]);
  return (
    <div>
      <ErrorBoundary>
        <Slider />
      </ErrorBoundary>
      <ProductionHouse />
      <ErrorBoundary>
        <GenreMovieList />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
