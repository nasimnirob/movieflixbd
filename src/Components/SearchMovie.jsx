import { Search } from "lucide-react";
import React from "react";

const SearchMovie = ({ search, setSearch }) => {
    return (
        <div className="w-full mt-2 px-2">
            <label htmlFor="movie-search" className="sr-only">
                Search for a movie..
            </label>

            <div className="flex items-center gap-3 bg-panel border border-white/10 rounded-full px-5 py-3 focus-within:border-marquee transition-colors">
                <span aria-hidden="true">
                    <Search />
                </span>

                <input
                    id="movie-search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for a movie..."
                    className="w-full bg-transparent outline-none font-body text-paper placeholder:text-slate px-1"
                />
            </div>
        </div>
    );
};

export default SearchMovie;