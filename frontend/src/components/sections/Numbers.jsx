import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/portfolio';
import { useLanguage } from '../../context/LanguageContext';

const Numbers = () => {
    const { language } = useLanguage();

    return (
        <section className="py-20 bg-gray-900 dark:bg-black/40 border-y border-gray-800 dark:border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <h3 className="text-4xl md:text-6xl font-black mb-2 text-white group-hover:text-orange-500 transition-colors duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">
                                {stat.label[language]}
                            </p>
                            <div className="w-8 h-1 bg-orange-500 mx-auto mt-4 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;
