
export const bioData = {
    fr: {
        name: "Augustin Kolié",
        title: "Développeur Full Stack & Créatif",
        description: "Je conçois des expériences web modernes, performantes et accessibles. Passionné par l'innovation et le design épuré.",
        about: "Développeur passionné avec plus de 5 ans d'expérience dans la création d'applications web. J'aime transformer des idées complexes en interfaces simples et intuitives.",
        cta: "Télécharger CV",
        contact: "Me Contacter",
        education: "Éducation"
    },
    en: {
        name: "Augustin Kolié",
        title: "Creative Full Stack Developer",
        description: "I craft beautiful, accessible, and performant web experiences using modern technologies. Passionate about innovation and clean design.",
        about: "Passionate developer with over 5 years of experience in building web applications. I love turning complex ideas into simple, intuitive interfaces.",
        cta: "Download CV",
        contact: "Contact Me",
        education: "Education"
    }
};

export const socialLinks = [
    { name: "GitHub", icon: "Github", url: "https://github.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com" }
];

export const contactInfo = {
    email: "contact@example.com",
    phone: "+224 620 00 00 00",
    address: "N'Zérékoré (Boma), Guinée",
    availability: {
        fr: "Disponible pour de nouveaux projets",
        en: "Available for new projects"
    }
};

export const heroSlides = [
    {
        id: 1,
        title: { fr: "Développeur Full Stack", en: "Full Stack Developer" },
        subtitle: { fr: "Je crée des solutions web innovantes", en: "I build innovative web solutions" },
        description: {
            fr: "Passionné par la création d'applications performantes et scalables utilisant les dernières technologies.",
            en: "Passionate about building performant and scalable applications using the latest technologies."
        },
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
        ctaPrimary: { text: { fr: "Contactez-nous", en: "Contact Us" }, link: "#contact" },
        ctaSecondary: { text: { fr: "Télécharger CV", en: "Download CV" }, link: "/cv.pdf" }
    },
    {
        id: 2,
        title: { fr: "Designer UI/UX", en: "UI/UX Designer" },
        subtitle: { fr: "Je conçois des expériences utilisateur intuitives", en: "I design intuitive user experiences" },
        description: {
            fr: "Je transforme des idées complexes en interfaces simples, belles et centrées sur l'utilisateur.",
            en: "I turn complex ideas into simple, beautiful, and user-centric interfaces."
        },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        ctaPrimary: { text: { fr: "Contactez-nous", en: "Contact Us" }, link: "#contact" },
        ctaSecondary: { text: { fr: "Télécharger CV", en: "Download CV" }, link: "/cv.pdf" }
    },
    {
        id: 3,
        title: { fr: "Consultant Technique", en: "Technical Consultant" },
        subtitle: { fr: "J'optimise vos processus digitaux", en: "I optimize your digital processes" },
        description: {
            fr: "J'aide les entreprises à faire les bons choix technologiques pour leur transformation numérique.",
            en: "I help companies make the right technological choices for their digital transformation."
        },
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        ctaPrimary: { text: { fr: "Contactez-nous", en: "Contact Us" }, link: "#contact" },
        ctaSecondary: { text: { fr: "Télécharger CV", en: "Download CV" }, link: "/cv.pdf" }
    }
];

export const skillsData = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "GitHub", level: 90, category: "Tools" },
    { name: "Docker", level: 65, category: "Tools" },
    { name: "Figma", level: 75, category: "Tools" },
    { name: "Communication", level: 95, category: "Soft Skills" },
    { name: "Team Work", level: 90, category: "Soft Skills" },
    { name: "Autonomy", level: 85, category: "Soft Skills" }
];

export const statsData = [
    { value: "10+", label: { fr: "Projets réalisés", en: "Projects Completed" } },
    { value: "3+", label: { fr: "Ans d'expérience", en: "Years Experience" } },
    { value: "5+", label: { fr: "Clients satisfaits", en: "Happy Clients" } },
    { value: "100%", label: { fr: "Satisfaction", en: "Client Satisfaction" } }
];

export const servicesData = {
    fr: [
        {
            title: "Création de sites web",
            description: "Conception de sites vitrines et e-commerce modernes, responsives et optimisés.",
            icon: "Globe"
        },
        {
            title: "Développement d’applications",
            description: "Création d'applications web complexes et performantes avec les dernières stacks.",
            icon: "Smartphone"
        },
        {
            title: "Maintenance et support",
            description: "Surveillance, mise à jour et optimisation continue de votre infrastructure web.",
            icon: "Settings"
        },
        {
            title: "Intégration de paiement",
            description: "Mise en place de solutions sécurisées (Orange Money, Stripe, PayPal).",
            icon: "CreditCard"
        }
    ],
    en: [
        {
            title: "Website Creation",
            description: "Design of modern, responsive, and optimized showcase and e-commerce sites.",
            icon: "Globe"
        },
        {
            title: "App Development",
            description: "Building complex and high-performance web applications with the latest stacks.",
            icon: "Smartphone"
        },
        {
            title: "Maintenance & Support",
            description: "Monitoring, updating, and continuous optimization of your web infrastructure.",
            icon: "Settings"
        },
        {
            title: "Payment Integration",
            description: "Implementation of secure solutions (Orange Money, Stripe, PayPal).",
            icon: "CreditCard"
        }
    ]
};

export const certificationsData = {
    fr: [
        {
            title: "Expertise Python",
            issuer: "Certification Professionnelle",
            date: "2025",
            link: "#"
        },
        {
            title: "Maîtrise JavaScript",
            issuer: "Certification Professionnelle",
            date: "2025",
            link: "#"
        },
        {
            title: "Full Stack Web Development",
            issuer: "Meta (Coursera)",
            date: "2024",
            link: "#"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2023",
            link: "#"
        }
    ],
    en: [
        {
            title: "Python Expertise",
            issuer: "Professional Certification",
            date: "2025",
            link: "#"
        },
        {
            title: "JavaScript Mastery",
            issuer: "Professional Certification",
            date: "2025",
            link: "#"
        },
        {
            title: "Full Stack Web Development",
            issuer: "Meta (Coursera)",
            date: "2024",
            link: "#"
        },
        {
            title: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2023",
            link: "#"
        }
    ]
};

export const experienceData = {
    fr: [
        {
            id: 1,
            role: "Développeur Full Stack",
            company: "Projets Personnels & Freelance",
            period: "2025",
            description: "Développement d'applications web modernes avec React, Node.js et MongoDB. Création de solutions complètes pour divers clients."
        },
        {
            id: 2,
            role: "Développeur Web Junior",
            company: "Stage & Projets Académiques",
            period: "2023 - 2025",
            description: "Développement de sites web et applications dans le cadre de projets universitaires et stages professionnels."
        }
    ],
    en: [
        {
            id: 1,
            role: "Full Stack Developer",
            company: "Personal Projects & Freelance",
            period: "2025",
            description: "Development of modern web applications with React, Node.js and MongoDB. Creating complete solutions for various clients."
        },
        {
            id: 2,
            role: "Junior Web Developer",
            company: "Internship & Academic Projects",
            period: "2023 - 2025",
            description: "Web development and applications as part of university projects and professional internships."
        }
    ]
};

export const projectsData = [
    {
        id: 1,
        title: "E-commerce Dashboard",
        description: { fr: "Un tableau de bord complet pour la gestion de ventes.", en: "A comprehensive dashboard for sales management." },
        tech: ["React", "Tailwind", "Recharts"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" },
        caseStudy: true
    },
    {
        id: 2,
        title: "Social Media App",
        description: { fr: "Application sociale avec messagerie instantanée.", en: "Social app with instant messaging." },
        tech: ["Next.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" },
        caseStudy: true
    },
    {
        id: 3,
        title: "Portfolio V1",
        description: { fr: "Mon premier portfolio en HTML/CSS.", en: "My first portfolio in HTML/CSS." },
        tech: ["HTML", "SASS", "JS"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 4,
        title: "Plateforme Éducative",
        description: {
            fr: "Système de gestion d'apprentissage avec cours en ligne, quiz interactifs et suivi des progrès.",
            en: "Learning management system with online courses, interactive quizzes and progress tracking."
        },
        tech: ["React", "Node.js", "PostgreSQL", "WebRTC"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 5,
        title: "Application de Restauration",
        description: {
            fr: "Plateforme de commande en ligne avec gestion de menu, réservations et livraison en temps réel.",
            en: "Online ordering platform with menu management, reservations and real-time delivery tracking."
        },
        tech: ["Next.js", "Stripe", "Firebase", "Google Maps"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" }
    },
    {
        id: 6,
        title: "Boutique E-commerce",
        description: {
            fr: "Site e-commerce complet avec panier, paiement sécurisé, gestion des stocks et tableau de bord admin.",
            en: "Full-featured e-commerce site with cart, secure payment, inventory management and admin dashboard."
        },
        tech: ["React", "Express", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", repo: "#" }
    }
];

export const blogData = {
    fr: [
        {
            title: "Pourquoi choisir React en 2025 ?",
            excerpt: "Découvrez les avantages de React pour vos futurs projets web.",
            content: "React continue de dominer le paysage du développement frontend en 2025. Avec l'introduction des Server Components et les améliorations constantes de performance, c'est l'outil de choix pour créer des interfaces utilisateur riches et réactives.\n\nDans cet article, nous explorons pourquoi React reste incontournable pour les développeurs full-stack, notamment grâce à son écosystème massif et sa flexibilité sans pareille.",
            date: "24 Dec 2024",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Optimiser les performances web",
            excerpt: "Quelques astuces pour rendre vos sites ultra-rapides.",
            content: "La performance est au cœur de l'expérience utilisateur. Un site lent perd ses visiteurs en quelques secondes. Pour optimiser vos applications, il est crucial de maîtriser le chargement différé (lazy loading), l'optimisation des images et la réduction du temps d'exécution JavaScript.\n\nNous verrons comment utiliser les outils modernes pour mesurer et améliorer chaque aspect de votre site web, assurant ainsi une fluidité parfaite sur tous les appareils.",
            date: "15 Dec 2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ],
    en: [
        {
            title: "Why choose React in 2025?",
            excerpt: "Discover the advantages of React for your future web projects.",
            content: "React continues to dominate the frontend development landscape in 2025. With the introduction of Server Components and constant performance improvements, it is the tool of choice for creating rich and reactive user interfaces.\n\nIn this article, we explore why React remains essential for full-stack developers, particularly due to its massive ecosystem and unparalleled flexibility.",
            date: "24 Dec 2024",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Optimizing web performance",
            excerpt: "Tips and tricks to make your websites ultra-fast.",
            content: "Performance is at the heart of user experience. A slow site loses visitors in seconds. To optimize your applications, it's crucial to master lazy loading, image optimization, and reducing JavaScript execution time.\n\nWe'll look at how to use modern tools to measure and improve every aspect of your website, ensuring perfect fluidity on all devices.",
            date: "15 Dec 2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ]
};

export const faqData = {
    fr: [
        {
            question: "Êtes-vous disponible pour de nouveaux projets ?",
            answer: "Oui, je suis actuellement ouvert à de nouvelles opportunités en freelance ou en CDI."
        },
        {
            question: "Travaillez-vous à distance ?",
            answer: "Tout à fait ! Je suis habitué au travail à distance et je dispose de tous les outils nécessaires."
        },
        {
            question: "Quel est votre délai moyen pour un site vitrine ?",
            answer: "En général, un site vitrine complet prend entre 1 et 2 semaines selon la complexité."
        }
    ],
    en: [
        {
            question: "Are you available for new projects?",
            answer: "Yes, I am currently open to new freelance or full-time opportunities."
        },
        {
            question: "Do you work remotely?",
            answer: "Absolutely! I am used to remote work and have all the necessary tools."
        },
        {
            question: "What is your average turnaround time for a showcase site?",
            answer: "Typically, a complete showcase site takes 1 to 2 weeks depending on complexity."
        }
    ]
};

export const languageSkills = {
    fr: [
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Intermédiaire" }
    ],
    en: [
        { name: "French", level: "Fluent" },
        { name: "English", level: "Intermediate" }
    ]
};

export const hobbiesData = {
    fr: ["Lecture Tech", "Sport", "Bénévolat", "Tech Communities"],
    en: ["Tech Reading", "Fitness", "Volunteering", "Tech Communities"]
};

export const testimonialsData = [
    {
        id: 1,
        name: "Sophie Martin",
        role: "CEO, TechStart",
        content: {
            fr: "Un travail exceptionnel ! Le site est rapide, beau et très simple à utiliser. Je recommande vivement.",
            en: "Exceptional work! The site is fast, beautiful, and very easy to use. I highly recommend."
        },
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        name: "David Chen",
        role: "CTO, Innovation Labs",
        content: {
            fr: "Une expertise technique rare combinée à un grand sens du design. Le résultat a dépassé nos attentes.",
            en: "Rare technical expertise combined with a great sense of design. The result exceeded our expectations."
        },
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
];

export const educationData = {
    fr: [
        {
            id: 1,
            degree: "Licence en Informatique",
            school: "Université de Labé",
            period: "2023 - 2026",
            description: "Formation universitaire en développement logiciel, bases de données et technologies web modernes."
        },
        {
            id: 2,
            degree: "Baccalauréat",
            school: "Lycée Général Lansana Conté, N'Zérékoré",
            period: "2020 - 2023",
            description: "Études secondaires avec spécialisation en sciences et mathématiques."
        },
        {
            id: 3,
            degree: "Collège",
            school: "Lycée Général Lansana Conté, N'Zérékoré",
            period: "2016 - 2020",
            description: "Formation du premier cycle secondaire avec excellence académique."
        },
        {
            id: 4,
            degree: "École Primaire",
            school: "NONA II",
            period: "2010 - 2016",
            description: "Fondations académiques et développement des compétences de base."
        }
    ],
    en: [
        {
            id: 1,
            degree: "Bachelor's Degree in Computer Science",
            school: "University of Labé",
            period: "2023 - 2026",
            description: "University education in software development, databases, and modern web technologies."
        },
        {
            id: 2,
            degree: "High School Diploma",
            school: "Lycée Général Lansana Conté, N'Zérékoré",
            period: "2020 - 2023",
            description: "Secondary education with specialization in science and mathematics."
        },
        {
            id: 3,
            degree: "Middle School",
            school: "Lycée Général Lansana Conté, N'Zérékoré",
            period: "2016 - 2020",
            description: "Lower secondary education with academic excellence."
        },
        {
            id: 4,
            degree: "Primary School",
            school: "NONA II",
            period: "2010 - 2016",
            description: "Academic foundations and development of basic skills."
        }
    ]
};
