import React from 'react';

const Footer = () => {
    return (
        <div className="border-t border-white/10 mt-16">
            <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-slate">
                <span className="font-display text-lg text-paper uppercase">Movie Flix BD</span>
                <p>&copy; 2026 <span className='uppercase text-[12px]'>MovieFlixBD</span>. <span className='uppercase text-[12px]'>All rights reserved</span></p>
                <a
                    href="https://github.com/nasimnirob"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-marquee transition-colors focus-ring rounded"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Footer;