import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { heroSlides } from '../../data/portfolio';
import bgImage from '../../assets/images/testimonials-bg.png';

const Hero = () => {
    const { language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white flex flex-col justify-center">
                        <div className="min-h-[280px]"> {/* Fixed height container to prevent layout jumping */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.span
                                        className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-semibold tracking-wide uppercase mb-6 border border-primary/20"
                                    >
                                        {heroSlides[currentIndex].title[language]}
                                    </motion.span>

                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                        {heroSlides[currentIndex].subtitle[language]}
                                    </h1>

                                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                                        {heroSlides[currentIndex].description[language]}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Static Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
                            >
                                {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
                            >
                                {language === 'fr' ? 'Télécharger CV' : 'Download CV'}
                            </a>
                        </div>
                    </div>

                    {/* Static Image with Orbiting Icons */}
                    <div className="relative hidden md:flex items-center justify-center">
                        <div className="relative w-full max-w-xl aspect-square flex items-center justify-center"> {/* Increased container size */}
                            {/* Animated Background Blob */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

                            {/* Central Image */}
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                                alt="Profile"
                                className="relative w-80 h-80 rounded-full shadow-2xl object-cover border-4 border-white/10 z-10"
                            />

                            {/* Orbiting Icons */}
                            <motion.div
                                className="absolute inset-0 z-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }} /* Slower rotation for larger radius */
                            >
                                {[
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                ].map((icon, index, array) => {
                                    const angle = (index / array.length) * 360;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="absolute left-1/2 top-1/2 w-14 h-14 -ml-7 -mt-7 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 shadow-lg" /* Slightly larger icons */
                                            style={{
                                                transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)` // Increased radius to 220px
                                            }}
                                        >
                                            <motion.img
                                                src={icon}
                                                alt="Tech Icon"
                                                className="w-full h-full object-contain"
                                                animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-primary text-white transition-all backdrop-blur-sm border border-white/10 z-20 group"
                >
                    <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-primary text-white transition-all backdrop-blur-sm border border-white/10 z-20 group"
                >
                    <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
                </button>

                {/* Bottom Dots */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-500 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
