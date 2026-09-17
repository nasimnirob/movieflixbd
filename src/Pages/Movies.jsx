import React, { useState } from "react";
import useMovies from "../Hooks/useMovies";
import useSearch from "../Hooks/useSearch";
import MovieCard from "../Components/MovieCard";
import SearchMovie from "../Components/SearchMovie";

const Movies = () => {
    const [movies, moviesLoading, moviesError] = useMovies();

    const [search, setSearch] = useState("");

    const [searchMovies, searchLoading, searchError] = useSearch(search);

    const isSearching = search.trim().length > 0;

    const moviesToShow = isSearching ? searchMovies : movies;
    const loading = isSearching ? searchLoading : moviesLoading;
    const error = isSearching ? searchError : moviesError;

    return (
        <div className="mx-auto max-w-7xl">
            <SearchMovie search={search} setSearch={setSearch} />

            <MovieCard movies={moviesToShow} moviesLoading={loading} moviesError={error} search={search} />
        </div>
    );
};

export default Movies;