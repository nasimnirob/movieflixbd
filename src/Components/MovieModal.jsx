import { CalendarDays, Clock, Languages, Star, X } from "lucide-react";
import React from "react";

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            {/* Modal */}
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/70 hover:bg-marquee hover:text-black transition"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Movie Image */}
                <img
                    src={
                        movie.image?.original ||
                        movie.image?.medium
                    }
                    alt={movie.name}
                    className="w-full h-64 md:h-80 object-cover"
                />

                {/* Content */}
                <div className="p-5">

                    {/* Movie Title */}
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {movie.name}
                    </h2>

                    {/* Rating / Release / Runtime / Language */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">

                        {/* Rating */}
                        <div className="flex items-center gap-1">
                            <Star className="w-4 text-marquee fill-marquee" />
                            <span>
                                {movie.rating?.average || "N/A"}
                            </span>
                        </div>

                        {/* Release Date */}
                        <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 text-marquee" />
                            <span>
                                {movie.premiered || "N/A"}
                            </span>
                        </div>

                        {/* Runtime */}
                        {movie.runtime && (
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 text-marquee" />
                                <span>
                                    {movie.runtime} min
                                </span>
                            </div>
                        )}

                        {/* Language */}
                        {movie.language && (
                            <div className="flex items-center gap-1">
                                <Languages className="w-4 text-marquee" />
                                <span>
                                    {movie.language}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Genres */}
                    {movie.genres?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {movie.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="px-2 py-1 text-xs bg-marquee text-black rounded"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Overview */}
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold mb-2">
                            Overview
                        </h3>

                        <div
                            className="text-sm text-gray-300 leading-6"
                            dangerouslySetInnerHTML={{
                                __html:
                                    movie.summary ||
                                    "No description available.",
                            }}
                        />
                    </div>

                    {/* Additional Information */}
                    <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">

                        {/* Type */}
                        <div>
                            <p className="text-gray-500">
                                Type
                            </p>
                            <p>
                                {movie.type || "N/A"}
                            </p>
                        </div>

                        {/* Status */}
                        <div>
                            <p className="text-gray-500">
                                Status
                            </p>
                            <p>
                                {movie.status || "N/A"}
                            </p>
                        </div>

                        {/* Network */}
                        <div>
                            <p className="text-gray-500">
                                Network
                            </p>
                            <p>
                                {movie.network?.name || "N/A"}
                            </p>
                        </div>

                    </div>

                    {/* Close Button */}
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-marquee text-black rounded hover:opacity-80 transition"
                        >
                            Close
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieModal;