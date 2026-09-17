import { Star } from "lucide-react";
import React, { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ movies, moviesLoading, moviesError }) => {

    const [selectedMovie, setSelectedMovie] = useState(null);

    // Loading
    if (moviesLoading) {
        return <p>Loading movies...</p>;
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
                            {/* <div className="flex flex-wrap gap-1 mt-2">
                                {movie.genres?.map((genre) => (
                                    <span
                                        key={genre}
                                        className="text-xs bg-gray-100 text-black px-2 py-1 rounded"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div> */}
                            <div className="pt-2 w-full">
                                <button onClick={() => setSelectedMovie(movie)} className="px-2 py-0.5 bg-marquee rounded text-black">See Details..</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <MovieModal
                movie={selectedMovie}
                onClose={() => setSelectedMovie(null)}
            />
        </div>
    );
};

export default MovieCard;



// import { Star, X, CalendarDays, Clock, Languages } from "lucide-react";
// import React, { useState } from "react";

// const MovieCard = ({ movies, moviesLoading, moviesError }) => {
//     const [selectedMovie, setSelectedMovie] = useState(null);

//     // Loading
//     if (moviesLoading) {
//         return <p>Loading movies...</p>;
//     }

//     // Error
//     if (moviesError) {
//         return <p>Something went wrong!</p>;
//     }

//     // Open Modal
//     const handleSeeDetails = (movie) => {
//         setSelectedMovie(movie);
//     };

//     // Close Modal
//     const handleCloseModal = () => {
//         setSelectedMovie(null);
//     };

//     return (
//         <>
//             {/* Movie Cards */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2">
//                 {movies?.map((movie) => (
//                     <div
//                         key={movie.id}
//                         className="bg-gray-900 text-white rounded-md overflow-hidden shadow"
//                     >
//                         {/* Movie Image */}
//                         <img
//                             src={movie.image?.medium}
//                             alt={movie.name}
//                             className="w-full h-72 object-cover"
//                         />

//                         {/* Movie Info */}
//                         <div className="p-3">
//                             <h2 className="font-semibold text-lg truncate">
//                                 {movie.name}
//                             </h2>

//                             <p className="text-sm text-gray-500">
//                                 {movie.type}
//                             </p>

//                             <div className="flex items-center justify-between">
//                                 <p className="text-sm mt-1 flex items-center gap-1.5">
//                                     <Star className="w-4 text-marquee fill-marquee" />

//                                     {movie.rating?.average || "N/A"}
//                                 </p>

//                                 <p className="text-sm text-gray-500">
//                                     {movie.premiered || "N/A"}
//                                 </p>
//                             </div>

//                             {/* See Details Button */}
//                             <div className="pt-2 w-full">
//                                 <button
//                                     onClick={() => handleSeeDetails(movie)}
//                                     className="px-2 py-1 bg-marquee rounded text-black hover:opacity-80 transition"
//                                 >
//                                     See Details
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* ================= MODAL ================= */}
//             {selectedMovie && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
//                     onClick={handleCloseModal}
//                 >
//                     {/* Modal */}
//                     <div
//                         className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white rounded-lg shadow-2xl"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Close Button */}
//                         <button
//                             onClick={handleCloseModal}
//                             className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/70 hover:bg-black transition"
//                         >
//                             <X className="w-5 h-5" />
//                         </button>

//                         {/* Large Movie Image */}
//                         <img
//                             src={
//                                 selectedMovie.image?.original ||
//                                 selectedMovie.image?.medium
//                             }
//                             alt={selectedMovie.name}
//                             className="w-full h-64 md:h-80 object-cover"
//                         />

//                         {/* Modal Content */}
//                         <div className="p-5">
//                             {/* Title */}
//                             <h2 className="text-2xl md:text-3xl font-bold">
//                                 {selectedMovie.name}
//                             </h2>

//                             {/* Rating + Release */}
//                             <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
//                                 {/* Rating */}
//                                 <div className="flex items-center gap-1">
//                                     <Star className="w-4 text-marquee fill-marquee" />
//                                     <span>
//                                         {selectedMovie.rating?.average || "N/A"}
//                                     </span>
//                                 </div>

//                                 {/* Release Date */}
//                                 <div className="flex items-center gap-1">
//                                     <CalendarDays className="w-4 text-marquee" />
//                                     <span>
//                                         {selectedMovie.premiered || "N/A"}
//                                     </span>
//                                 </div>

//                                 {/* Runtime */}
//                                 {selectedMovie.runtime && (
//                                     <div className="flex items-center gap-1">
//                                         <Clock className="w-4 text-marquee" />
//                                         <span>
//                                             {selectedMovie.runtime} min
//                                         </span>
//                                     </div>
//                                 )}

//                                 {/* Language */}
//                                 {selectedMovie.language && (
//                                     <div className="flex items-center gap-1">
//                                         <Languages className="w-4 text-marquee" />
//                                         <span>
//                                             {selectedMovie.language}
//                                         </span>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Genres */}
//                             {selectedMovie.genres?.length > 0 && (
//                                 <div className="flex flex-wrap gap-2 mt-4">
//                                     {selectedMovie.genres.map((genre) => (
//                                         <span
//                                             key={genre}
//                                             className="px-2 py-1 text-xs bg-marquee text-black rounded"
//                                         >
//                                             {genre}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Summary */}
//                             <div className="mt-5">
//                                 <h3 className="text-lg font-semibold mb-2">
//                                     Overview
//                                 </h3>

//                                 <div
//                                     className="text-sm text-gray-300 leading-6"
//                                     dangerouslySetInnerHTML={{
//                                         __html:
//                                             selectedMovie.summary ||
//                                             "No description available.",
//                                     }}
//                                 />
//                             </div>

//                             {/* Additional Info */}
//                             <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
//                                 <div>
//                                     <p className="text-gray-500">Type</p>
//                                     <p>{selectedMovie.type || "N/A"}</p>
//                                 </div>

//                                 <div>
//                                     <p className="text-gray-500">Status</p>
//                                     <p>{selectedMovie.status || "N/A"}</p>
//                                 </div>

//                                 <div>
//                                     <p className="text-gray-500">Network</p>
//                                     <p>
//                                         {selectedMovie.network?.name ||
//                                             "N/A"}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Close Button */}
//                             <div className="flex justify-end mt-6">
//                                 <button
//                                     onClick={handleCloseModal}
//                                     className="px-4 py-2 bg-marquee text-black rounded hover:opacity-80 transition"
//                                 >
//                                     Close
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default MovieCard;
