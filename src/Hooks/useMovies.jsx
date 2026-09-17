import React, { useEffect, useState } from 'react';

const API_URI = "https://api.tvmaze.com/shows"

const useMovies = () => {
    const [movies, setMovies] = useState([]);
    const [moviesLoading, setMoviesLoading] = useState(true);
    const [moviesError, setMoviesError] = useState(null);

    console.log(movies);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`${API_URI}`)

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const movies = await response.json()

                setMovies(movies);
                setMoviesLoading(true);
            }
            catch (error) {
                console.error('Something is wrong, fetching error:', error);
                setMoviesError(error.message || 'Failed to fetch movies');
            }
            finally {
                setMoviesLoading(false);
            }
        }
        fetchMovies();
    }, [])
    return [movies, moviesLoading, moviesError]
};

export default useMovies;