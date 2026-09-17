import { useEffect, useState } from "react";

const API_URI = "https://api.tvmaze.com/search/shows?q=";

const useSearch = (search) => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState("");

    useEffect(() => {
        const query = search.trim();

        if (!query) {
            setSearchMovies([]);
            setSearchError("");
            setSearchLoading(false);
            return;
        }

        setSearchLoading(true);
        setSearchError("");

        const timer = setTimeout(async () => {
            try {
                const response = await fetch(
                    `${ API_URI }${ encodeURIComponent(query) } `
                );

                if (!response.ok) {
                    throw new Error("Failed to search movies");
                }

                const data = await response.json();

                const shows = data.map((item) => item.show);

                setSearchMovies(shows);
            } catch (error) {
                console.error(error);
                setSearchError("Something went wrong!");
                setSearchMovies([]);
            } finally {
                setSearchLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    return [searchMovies, searchLoading, searchError];
};

export default useSearch;