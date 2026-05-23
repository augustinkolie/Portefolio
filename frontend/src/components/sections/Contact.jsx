import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { bioData, contactInfo } from '../../data/portfolio';
import { submitContactForm } from '../../services/api';

const Contact = () => {
    const { language } = useLanguage();
    const formRef = useRef();
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('Form submission started');
        setStatus('sending');
        setErrorMessage('');

        // Get form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            phone: formData.get('user_phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            console.log('Submitting data:', data);
            const result = await submitContactForm(data);
            console.log('Submission result:', result);
            setStatus('success');
            e.target.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error('Submission catch block:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Une erreur est survenue. Veuillez réessayer.');

            // Reset error message after 5 seconds
            setTimeout(() => {
                if (status === 'error') {
                    setStatus('');
                    setErrorMessage('');
                }
            }, 5000);
        }
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            {/* Split Background as in Image 2 */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gray-800 dark:bg-gray-900 z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-black z-0"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white space-y-12 py-10"
                    >
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                {language === 'fr' ? 'Collaborons pour bâtir votre prochaine solution digitale' : 'Let\'s collaborate to build your next digital solution'}
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                                {language === 'fr' 
                                    ? "Projetez-vous de lancer une application ou d'optimiser votre présence en ligne ? Discutons-en pour transformer vos idées en réalité."
                                    : "Thinking about launching an app or optimizing your online presence? Let's talk to turn your ideas into reality."}
                            </p>
                        </div>

                        <div className="text-2xl font-bold">
                            {language === 'fr' ? 'Appelez-moi au :' : 'Call me at:'} <span className="text-orange-500">{contactInfo.phone}</span>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400">
                                {language === 'fr' ? 'Mes avantages :' : 'My advantages:'}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    { fr: "orienté client", en: "client oriented" },
                                    { fr: "Axé sur les résultats", en: "result oriented" },
                                    { fr: "Indépendant", en: "independent" },
                                    { fr: "Résolution de problèmes", en: "problem solving" },
                                    { fr: "Compétent", en: "competent" },
                                    { fr: "Transparent", en: "transparent" }
                                ].map((adv, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        </div>
                                        <span className="text-lg text-gray-200 capitalize">{adv[language]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Floating Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-2xl p-8 md:p-12"
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {language === 'fr' ? 'Contactez-nous' : 'Contact Us'}
                            </h3>
                            <div className="flex justify-center">
                                <Mail className="text-gray-400" size={32} />
                            </div>
                        </div>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{language === 'fr' ? 'Prénom' : 'First Name'}</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{language === 'fr' ? 'Nom de famille' : 'Last Name'}</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{language === 'fr' ? 'Entreprise / Organisation' : 'Company / Organization'}</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">E-mail</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{language === 'fr' ? 'Téléphone' : 'Phone'}</label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">{language === 'fr' ? 'Comment pouvons-nous vous aider ?' : 'How can we help you?'}</label>
                                <select 
                                    name="help_type"
                                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800 bg-white"
                                >
                                    <option value="">{language === 'fr' ? 'Sélectionnez une option' : 'Select an option'}</option>
                                    <option value="dev">{language === 'fr' ? 'Développement Web' : 'Web Development'}</option>
                                    <option value="consult">{language === 'fr' ? 'Consultation Tech' : 'Tech Consultation'}</option>
                                    <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-red-500 outline-none transition-colors text-gray-800 resize-none"
                                    placeholder={language === 'fr' ? "Pour mieux vous aider, veuillez décrire comment nous pouvons vous aider..." : "To better help you, please describe how we can help you..."}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded shadow-lg transition-all disabled:opacity-70"
                            >
                                {status === 'sending' ? (language === 'fr' ? 'ENVOI EN COURS...' : 'SENDING...') : (language === 'fr' ? 'ENVOYER' : 'SEND')}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center font-bold">{language === 'fr' ? '✓ Message envoyé !' : '✓ Message sent!'}</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center font-bold">{errorMessage}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
