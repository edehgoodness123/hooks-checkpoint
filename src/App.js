// App.js
import React, { useState } from 'react';
// import MovieCard from './MovieCard';
import MovieList from './component/MovieList';
import Filter from './component/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://example.com/poster1.jpg',
      rating: 4.5,
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 3.8,
    },
 
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleFilterChange = (value) => {
    setTitleFilter(value);
  };

  const handleRatingFilterChange = (value) => {
    setRatingFilter(value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="app">
      <h1>Movie Collection</h1>
      <Filter
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({ title: 'New Movie', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
