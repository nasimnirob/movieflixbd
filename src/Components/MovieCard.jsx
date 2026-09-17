import { Star } from "lucide-react";
import React, { useState } from "react";
import MovieModal from "./MovieModal";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieCard = ({ movies, moviesLoading, moviesError, search }) => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    // Loading
    if (moviesLoading) {
        return (
            <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2">
                    {Array.from({ length: 8 }).map((_, index) =>
                        (<MovieCardSkeleton key={index} />))}
                </div>
            </>
        );
    }

    // Empty search result
    if (movies?.length === 0 && search?.trim()) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center h-[750px]">
                <h2 className="text-lg font-semibold text-gray-300">
                    No shows matched "{search.trim()}".
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                    Try a different movie name.
                </p>
            </div>
        );
    }

    // Error
    if (moviesError) {
        return <p>Something went wrong!</p>;
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2">
            {movies?.map((movie) => (
                <div
                    key={movie.id}
                    className="bg-gray-900 rounded-md overflow-hidden shadow"
                >
                    {/* Movie Image */}
                    <img
                        src={movie.image?.medium}
                        alt={movie.name}
                        className="w-full rounded-t-md  h-72 object-cover"
                    />

                    {/* Movie Info */}
                    <div className="p-3">
                        <h2 className="font-semibold text-lg">
                            {movie.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {movie.type}
                        </p>

                        <div className="flex items-center justify-between">
                            <p className="text-sm mt-1 flex items-center gap-1.5">
                                <Star className="w-4 text-marquee" /> {movie.rating?.average || "N/A"}
                            </p>
                            <p className="text-sm text-gray-500">
                                {movie.premiered || "N/A"}
                            </p>
                        </div>

                        <div>
                            <div className="pt-2 w-full">
                                <button onClick={() => setSelectedMovie(movie)} className="px-2 py-0.5 bg-marquee rounded text-black">See Details..</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        </div>
    );
};

export default MovieCard;