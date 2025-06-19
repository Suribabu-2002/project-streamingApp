import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Slider from '../components/Slider'
import ProductionHouse from '../components/ProductionHouse'
import GenreMovieList from '../components/GenreMovieList'

const Home = () => {
  return (
      <div>
    <ErrorBoundary>
      <Slider />
    </ErrorBoundary>
    <ProductionHouse />
    <ErrorBoundary>
      <GenreMovieList />
    </ErrorBoundary></div>
  )
}

export default Home