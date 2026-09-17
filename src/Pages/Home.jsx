import React from 'react';
import Hero from '../Components/Hero';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            
            <ScrollRestoration />

            <Hero />

            <section className="max-w-5xl mx-auto px-5 pb-24 grid sm:grid-cols-3 gap-6 text-center font-body py-16">
                <div className="bg-panel rounded-lg p-6 border border-white/5">
                    <p className="font-display text-3xl text-marquee mb-1">10k+</p>
                    <p className="text-slate text-sm">shows in the catalog</p>
                </div>
                <div className="bg-panel rounded-lg p-6 border border-white/5">
                    <p className="font-display text-3xl text-marquee mb-1">Instant</p>
                    <p className="text-slate text-sm">title search, no sign-up</p>
                </div>
                <div className="bg-panel rounded-lg p-6 border border-white/5">
                    <p className="font-display text-3xl text-marquee mb-1">Details</p>
                    <p className="text-slate text-sm">cast, genres, and ratings on demand</p>
                </div>
            </section>
        </div>
    );
};

export default Home;