import React from 'react';

const MovieCardSkeleton = () => {
    return (
        <div className="bg-gray-900 rounded-md overflow-hidden shadow animate-pulse">
            <div className="w-full h-72 bg-gray-800 rounded-t-md" />

            <div className="p-3">
                <div className="h-6 w-3/4 bg-gray-800 rounded mb-2" />
                <div className="h-4 w-1/3 bg-gray-800 rounded mb-3" />

                <div className="flex items-center justify-between">
                    <div className="h-4 w-16 bg-gray-800 rounded" />
                    <div className="h-4 w-20 bg-gray-800 rounded" />
                </div>

                <div className="pt-2 w-full">
                    <div className="h-6 w-24 bg-gray-800 rounded" />
                </div>
            </div>
        </div>
    );
};

export default MovieCardSkeleton;

