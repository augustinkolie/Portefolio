import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Zap, Target, Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { bioData, languageSkills, hobbiesData } from '../../data/portfolio';
import aboutImg from '../../assets/images/about-dev.png';

const About = () => {
    const { language } = useLanguage();
    const content = bioData[language];

    const highlights = [
        {
            icon: Code2,
            title: language === 'fr' ? 'Code Propre' : 'Clean Code',
            description: language === 'fr' ? 'Écriture de code maintenable et évolutif' : 'Writing maintainable and scalable code'
        },
        {
            icon: Zap,
            title: language === 'fr' ? 'Performance' : 'Performance',
            description: language === 'fr' ? 'Optimisation pour une expérience fluide' : 'Optimization for smooth experience'
        },
        {
            icon: Target,
            title: language === 'fr' ? 'Orienté Solutions' : 'Solution-Oriented',
            description: language === 'fr' ? 'Résolution créative de problèmes complexes' : 'Creative problem-solving approach'
        },
        {
            icon: Heart,
            title: language === 'fr' ? 'Passion' : 'Passion',
            description: language === 'fr' ? 'Amour pour la technologie et l\'innovation' : 'Love for technology and innovation'
        }
    ];

    const stats = [
        { icon: Briefcase, value: '3+', label: language === 'fr' ? 'Années d\'expérience' : 'Years Experience' },
        { icon: Award, value: '15+', label: language === 'fr' ? 'Projets réalisés' : 'Projects Completed' },
        { icon: GraduationCap, value: '2023', label: language === 'fr' ? 'Début études supérieures' : 'Started University' },
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-2 block">
                        {language === 'fr' ? 'Découvrez-moi' : 'Get To Know Me'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                        {language === 'fr' ? 'À propos de moi' : 'About Me'}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Side - Coding Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 md:order-1"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Development Workspace Image */}
                            <img
                                src={aboutImg}
                                alt="Web Development Workspace"
                                className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-3xl"></div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 order-1 md:order-2"
                    >
                        {/* Bio Text */}
                        <div>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                {content.about}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {language === 'fr'
                                    ? "Actuellement étudiant en informatique à l'Université de Labé, je combine apprentissage académique et projets pratiques pour développer mes compétences en développement web full-stack."
                                    : "Currently studying Computer Science at the University of Labé, I combine academic learning with practical projects to develop my full-stack web development skills."}
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-orange-500/10 rounded-lg group-hover:bg-orange-500 transition-colors">
                                            <item.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 dark:text-gray-200 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center mb-2">
                                        <div className="p-2 bg-orange-500/10 rounded-lg">
                                            <stat.icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">{stat.value}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
