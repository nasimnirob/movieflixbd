import React from 'react';
import useMovies from '../Hooks/useMovies';
import MovieCard from '../Components/MovieCard';

const Movies = () => {
    const [movies, moviesLoading, moviesError] = useMovies();
    console.log(movies)
    return (
        <div className='mx-auto max-w-7xl'>
            <MovieCard movies={movies} moviesLoading={moviesLoading} moviesError={moviesError} />
        </div>
    );
};

export default Movies;