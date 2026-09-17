import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-2 focus-ring rounded">
                <span className="font-display text-2xl text-marquee uppercase">Movie Flix</span>
                <span className="hidden sm:inline text-slate text-sm font-body tracking-tight">
                    movie explorer
                </span>
            </Link>
            <div className="flex items-center gap-6 font-body text-sm">
                <NavLink
                    to="/movies"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-full font-medium transition-colors focus-ring ${isActive
                            ? 'bg-marquee text-ink'
                            : 'bg-panel text-paper hover:bg-marquee hover:text-ink'
                        }`
                    }
                >
                    Movies
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;