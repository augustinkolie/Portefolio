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
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {language === 'fr' ? 'Contactez-moi' : 'Get In Touch'}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                            {language === 'fr'
                                ? "Un projet en tête ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message."
                                : "Have a project in mind or just want to chat? Feel free to send me a message."}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">{language === 'fr' ? 'Téléphone' : 'Phone'}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">{language === 'fr' ? 'Adresse' : 'Location'}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 h-64 rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                title="Map"
                                src="https://maps.google.com/maps?q=Boma,Nzerekore,Guinea&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700"
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">{language === 'fr' ? 'Nom' : 'Name'}</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="Augustin Kolié"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder="augustinkolie54@gmail.com"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{language === 'fr' ? 'Téléphone' : 'Phone'}</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                                        placeholder="+224 ..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{language === 'fr' ? 'Sujet' : 'Subject'}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                                        placeholder={language === 'fr' ? "Objet de votre message" : "Subject of your message"}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                                    placeholder={language === 'fr' ? "Votre message..." : "Your message..."}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    language === 'fr' ? 'Envoi en cours...' : 'Sending...'
                                ) : status === 'success' ? (
                                    language === 'fr' ? '✓ Envoyé !' : '✓ Sent!'
                                ) : (
                                    <>
                                        {language === 'fr' ? 'Envoyer' : 'Send Message'}
                                        <Send size={20} />
                                    </>
                                )}
                            </button>

                            {/* Error Message Display */}
                            {status === 'error' && errorMessage && (
                                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Success Message Display */}
                            {status === 'success' && (
                                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 text-sm">
                                    {language === 'fr'
                                        ? '✓ Votre message a été envoyé avec succès !'
                                        : '✓ Your message has been sent successfully!'}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
