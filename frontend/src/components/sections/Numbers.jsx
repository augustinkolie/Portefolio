import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/portfolio';
import { useLanguage } from '../../context/LanguageContext';
import { Star } from 'lucide-react';

const Numbers = () => {
    const { language } = useLanguage();

    return (
        <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-y-12">
                    {/* Review Block as in Image 2 */}
                    <div className="flex flex-col items-start min-w-[200px]">
                        <div className="flex items-center gap-1 mb-2">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} size={16} className="fill-red-500 text-red-500" />
                             ))}
                        </div>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-tight mb-1">
                            {language === 'fr' ? 'AVIS RÉDIGÉ LE' : 'REVIEW WRITTEN ON'}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter italic">Augustin</span>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{language === 'fr' ? '4 AVIS' : '4 REVIEWS'}</span>
                        </div>
                    </div>

                    {/* Stats with Dividers */}
                    <div className="flex flex-wrap flex-1 items-center justify-around gap-y-8">
                        {statsData.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-6 px-4 group"
                            >
                                {/* Vertical Divider */}
                                <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                                
                                <div className="text-left">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
                                            {stat.value}
                                        </span>
                                        <span className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-200">
                                            {stat.unit}
                                        </span>
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1">
                                        {stat.label[language]}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Numbers;
