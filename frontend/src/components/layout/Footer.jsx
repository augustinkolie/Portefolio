import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                            Portfolio.
                        </span>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            {language === 'fr'
                                ? "Créer des expériences numériques avec passion."
                                : "Building digital experiences with passion."}
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-500 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-8">
                    © {new Date().getFullYear()} {language === 'fr' ? 'Tous droits réservés. Créé avec React & Tailwind.' : 'All rights reserved. Made with React & Tailwind.'}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
