import { Globe } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
            <section className="relative overflow-hidden py-10">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background:
                            'radial-gradient(circle at 20% 20%, rgba(232,176,75,0.15), transparent 45%), radial-gradient(circle at 80% 60%, rgba(193,68,61,0.18), transparent 50%)',
                    }}
                />
                <div className="max-w-4xl mx-auto px-5 pt-24 pb-28 flex flex-col items-center text-center gap-6">
                    <div className="uppercase -mt-30 mb-8 inline-flex items-center gap-2 rounded-full border border-slate bg-ink/95 px-4 py-1.5 text-[11px] font-medium text-slate shadow-sm backdrop-blur">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marquee opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-marquee" />
                        </span>
                        BD Movie Server Network
                        <Globe className="h-4 w-4 text-marquee" />
                    </div>
                    <h1 class="site-title">
                        <Link className='md:text-[100px] text-[60px]' to='/'>MovieFlix BD </Link>
                    </h1>

                    <p className="font-body text-slate max-w-lg text-lg">
                        MovieFlixBD pulls from a living catalog of thousands of series so you can browse,
                        search, and settle tonight's watch in under a minute.
                    </p>
                    <Link
                        to="/movies"
                        className="mt-2 px-24 py-14 rounded-3xl bg-black/10 backdrop-blur text-xl border border-white/20 text-white/80 font-body font-semibold hover:bg-black/5 hover:backdrop:blur transition-all duration-300 focus-ring"
                    >
                        Explore Now
                    </Link>

                </div>
            </section>
    );
};

export default Hero;