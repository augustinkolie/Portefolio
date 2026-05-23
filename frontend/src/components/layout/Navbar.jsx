import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, switchLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: language === "fr" ? "Accueil" : "Home", path: "/" },
        { name: language === "fr" ? "À propos" : "About", path: "/#about" },
        { name: language === "fr" ? "Projets" : "Projects", path: "/#projects" },
        { name: language === "fr" ? "Expérience" : "Experience", path: "/#experience" },
        { name: language === "fr" ? "Contact" : "Contact", path: "/#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                        P
                    </div>
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                        Portfolio.
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className={cn(
                                "transition-colors font-medium",
                                scrolled
                                    ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className={cn(
                        "flex items-center space-x-4 border-l pl-4",
                        scrolled
                            ? "border-gray-200 dark:border-gray-700"
                            : "border-white/20"
                    )}>
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-2 rounded-full transition-colors",
                                scrolled
                                    ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    : "text-white hover:bg-white/10"
                            )}
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => switchLanguage(language === "fr" ? "en" : "fr")}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-full transition-all border",
                                scrolled
                                    ? "text-gray-700 border-gray-200 hover:bg-gray-100 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800"
                                    : "text-white border-white/20 hover:bg-white/10"
                            )}
                            title={language === "fr" ? "Passer en Anglais" : "Switch to French"}
                        >
                            <Globe size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">{language}</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2 sm:gap-4">
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full transition-colors",
                            scrolled 
                                ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300" 
                                : "text-white hover:bg-white/10"
                        )}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "p-2 rounded-md transition-colors",
                            scrolled
                                ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                                : "text-white hover:bg-white/10"
                        )}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors flex justify-between items-center"
                                >
                                    {link.name}
                                    <Globe size={16} className="opacity-20" />
                                </a>
                            ))}
                            <div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
                            <button
                                onClick={() => {
                                    switchLanguage(language === "fr" ? "en" : "fr");
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-3 text-lg font-bold text-primary"
                            >
                                <Globe size={20} />
                                <span>{language === "fr" ? "Switch to English" : "Passer en Français"}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
