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
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Portfolio.
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
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => switchLanguage(language === "fr" ? "en" : "fr")}
                                className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300"
                            >
                                <Globe size={20} />
                                <span>Switch to {language === "fr" ? "English" : "Français"}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
