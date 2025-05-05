import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, TextField, Button, Typography, IconButton, AppBar, Toolbar, Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { 
    Github, Linkedin, Mail, Phone, MapPin, 
    Moon, Sun, GraduationCap, Briefcase, 
    Code, Brain, HeartHandshake, MessageSquare,
    ChevronDown
} from 'lucide-react';

const CV_DATA = {
    "personal": {
        "name": "Ömer Faruk Büyükbas",
        "address": "Germany",
        "email": "ofbuyukbas@gmail.com",
        "phone": "+49 176 24858132",
        "linkedin": "https://www.linkedin.com/in/buyukbas/",
        "github": "https://github.com/omerbykbs"
    },
    "profile": "I am a software engineer with a passion for building scalable and efficient systems. I have a strong foundation in computer science and software engineering principles. I am a quick learner and I am always looking for new challenges.",
    "experience": [
        {
            "position": "Data Scientist (Werkstudent)",
            "company": "BIBA - Bremer Institut für Produktion und Logistik GmbH",
            "period": "Okt. 2023 - März 2025",
            "description": [
                "Konzeption und Entwicklung eines datenverarbeitenden Backends mit Python und Docker zur Extraktion strukturierter Informationen aus komplexen PDF-Dokumenten, Speicherung in SQL- Datenbank. \nTechnologien: REST-API, SQLAlchemy, MySQL, PyPDF2, pdfplumber",
                "Explorative Analyse und Mustererkennung in Daten zur Identifikationrelevanter Zusammenhänge, inklusive Zeitreihenanalyse und statistischer Auswertung \nTechnologien: Seaborn, Matplotlib, Plotly, SQL"
            ]
        },
        {
            "position": "Software Tester (Werkstudent)",
            "company": "Open Reply GmbH",
            "period": "Feb 2022 - Aug. 2023",
            "description": [
                "Qualitätssicherung in agilen Scrum-Teams mit Jira & Confluence für B2B/B2C-Anwendungen.",
                "Planung und Durchführung von Testautomatisierung mit JavaScript und Playwright.",
                "Zusammenarbeit mit Development-Teams und Produkt Owners zur Sicherstellung hochwertiger Softwarelösungen."
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Science in Informatik",
            "institution": "Universität Bremen",
            "period": "2020 - 2025",
            "gpa": "1.79"
        }
    ],
    "projects": [
        {
            "name": "KI-gestützte Informationsextraktion aus neurowissenschaftlichen Dokumenten (Bachelorarbeit)",
            "description": [
                "Entwicklung eines automatisierten Systems zur strukturierten Informationsextraktion aus neurowissenschaftlichen Publikationen mithilfe von LLMs und RAG.",
                "Methoden: Prompt Engineering, RAG-Chunking, Self-Reflexion, LLM-Vergleiche",
            ],
            "technologies": ["Python","Pandas","Numpy","SciPy","nltk","SpaCy","Transformers","torch","Sentence-Transformers", "LangChain", "LangGraph", "LangSmith", "FAISS"]
        },
        {
            "name": "Mobile 4D (Bachelorprojekt)",
            "description": [
                "Backend-Implementierung von zwei Registrierungsarten, E-Mail-Verifikation und OAuth-Anbindung",
                "Integration von Firebase Cloud Messaging (FCM) zur Umsetzung von Push-Benachrichtigungen",
                "Umsetzung responsiver Web-Frontends mit Vue.js",
            ],
            "technologies": ["Django", "FastAPI", "Vue.js", "Flutter", "Firebase", "OAuth", "Git"]
        },
        {
            "name": "Microservice-Projekt",
            "description": [
                "Entwicklung einer Microservice-basierten Webanwendung zur Reaktion auf Videos",
                "Backend mit Java Spring Boot, Frontend mit React",
                "Verwendung von MongoDB und PostgreSQL zur Datenverwaltung"
            ],
            "technologies": ["Java Spring Boot", "React", "MongoDB", "PostgreSQL", "HTML", "CSS", "JavaScript", "Tailwind", "Git"]
        },
        {
            "name": "GeoLocator–Projekt",
            "description": [
                "Entwicklung einer interaktiven Kartenanwendung zur Visualisierung geografischer Daten"
            ],
            "technologies": ["React.js", "FastAPI", "PostgreSQL", "PostGIS", "Docker"]
        },
        {
            "name": "Chat-Bot-Projekt",
            "description": [
                "Entwicklung eines dialogbasierten Chatbots zur Nutzung generativer KI"
            ],
            "technologies": ["Flask", "React", "Material-UI", "LangChain", "OpenAI API"]
        },
        {
            "name": "Angular Post Projekt",
            "description": [
                "Entwicklung einer Angular-Anwendung mit Fokus auf effiziente Datenverarbeitung",
                "Einsatz moderner HTTP-Provider-API und komponentenbasierter Architektur"
            ],
            "technologies": ["Angular", "JSON Server", "RESTful APIs"]
        },
        {
            "name": "Fake-News-Erkennungsprojekt",
            "description": [
                "Entwicklung eines Fake-News-Klassifikationssystems mit Fokus auf Feature Engineering, Modellvergleich und Evaluierung",
                "Testgenauigkeit bis zu 97% mit vier ML-Algorithmen (Logistic Regression, Random Forest, Gradient Boosting, Decision Tree)"
            ],
            "technologies": ["FastAPI", "Docker", "scikit-learn", "pandas", "Machine Learning"]
        }
    ],
    "skills": {
        "technical": [
            "Python", "Java", "JavaScript", "SQL", "HTML/CSS", "Haskell", "R",
            "FastAPI", "Django", "Flask", "Spring Boot", "Angular", "React", "Vue.js", "Flutter", 
            "LangChain", "MLFlow", "JUnit"
        ],
        "cloud": [
            "AWS", "Google Cloud Platform", "Terraform", "Google Firebase"
        ],
        "devops": [
            "Docker", "Kubernetes", "CI/CD Tools", "Git", "Linux", "MLOps"
        ],
        "tools_ides": [
            "VS Code", "PyCharm", "IntelliJ", "Spyder", "Jupyter Notebook"
        ],
        "libraries_technologies": [
            "NumPy", "pandas", "Matplotlib", "Scikit-Learn", "SciPy", 
            "Hugging Face Transformers", "SQLAlchemy", "Spark", "ETL", 
            "PostGIS", "Vektordatenbanken", "LangSmith", "PyTorch", "TensorFlow",
            "Retrieval Augmented Generation", "Agentic Workflow", "Orchestrierung"
        ],
        "languages": [
            "Deutsch (C1)", "Englisch (C1)", "Turkisch (Native)"
        ]
    },
    "volunteer": {
        "role": "Mentor und Integrationsbegleiter",
        "organization": "Weser Kultur- und Bildungszentrum e.V.",
        "location": "Bremen, DE",
        "period": "Jan 2024 – März 2025",
        "description": [
            "Begleitung und Unterstützung geflüchteter Kinder, Jugendlicher und Familien",
            "Mitwirkung bei Veranstaltungen und Exkursionen mit Schwerpunkt politische Bildung",
            "Unterstützung bei der Organisation und Durchführung von Sprachcafés",
        ]
    }
};

// Update translations object
const translations = {
    en: {
        welcome: "Welcome!",
        profile: "I am a software engineer with a passion for building scalable and efficient systems. I have a strong foundation in computer science and software engineering principles. I am a quick learner and I am always looking for new challenges.",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        volunteer: "Volunteer Work",
        chat: "Chat with AI",
        send: "Send",
        typeMessage: "Type a message...",
        position: "Position",
        company: "Company",
        period: "Period",
        description: "Description",
        technologies: "Technologies",
        technical: "Technical",
        cloud: "Cloud",
        devops: "DevOps",
        tools_ides: "Tools & IDEs",
        libraries_technologies: "Libraries & Technologies",
        languages: "Languages",
        role: "Role",
        organization: "Organization",
        location: "Location"
    },
    de: {
        welcome: "Willkommen!",
        profile: "Ich bin ein Software-Ingenieur mit einer Leidenschaft für den Aufbau skalierbarer und effizienter Systeme. Ich habe eine solide Grundlage in Informatik und Software-Engineering-Prinzipien. Ich lerne schnell und suche ständig nach neuen Herausforderungen.",
        experience: "Berufserfahrung",
        projects: "Projekte",
        skills: "Fähigkeiten",
        education: "Ausbildung",
        volunteer: "Ehrenamtliche Arbeit",
        chat: "Chat mit KI",
        send: "Senden",
        typeMessage: "Nachricht eingeben...",
        position: "Position",
        company: "Unternehmen",
        period: "Zeitraum",
        description: "Beschreibung",
        technologies: "Technologien",
        technical: "Technisch",
        cloud: "Cloud",
        devops: "DevOps",
        tools_ides: "Tools & IDEs",
        libraries_technologies: "Bibliotheken & Technologien",
        languages: "Sprachen",
        role: "Rolle",
        organization: "Organisation",
        location: "Standort"
    }
};

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode")) ?? false);
    const [cvContext, setCvContext] = useState("");
    const [language, setLanguage] = useState(() => localStorage.getItem("language") ?? "en");
    const [showFullContent, setShowFullContent] = useState(false);
    const chatBoxRef = useRef(null);
    const mainContentRef = useRef(null);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const toggleChat = () => setIsOpen((prev) => !prev);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", JSON.stringify(newMode));
    };

    const toggleLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    // Add translation helper function
    const t = (key) => translations[language][key] || translations['en'][key];

    const findRelevantCVSections = (question) => {
        const lowerQuestion = question.toLowerCase();
        let relevantSections = [];

        if (["name", "contact", "personal"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Personal Information", 
                content: Object.entries(CV_DATA.personal)
                    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
                    .join("\n")
            });
        }

        if (["profile", "summary", "about"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Profile Summary", 
                content: CV_DATA.profile
            });
        }

        if (["experience", "work", "job"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Work Experience", 
                content: CV_DATA.experience.map(exp => 
                    `${exp.position} at ${exp.company} (${exp.period})\n${exp.description}`
                ).join("\n\n")
            });
        }

        if (["education", "study", "degree"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Education", 
                content: CV_DATA.education.map(edu => 
                    `${edu.degree} at ${edu.institution} (${edu.period})\nGPA: ${edu.gpa}`
                ).join("\n\n")
            });
        }

        if (lowerQuestion.includes("project")) {
            relevantSections.push({ 
                title: "Projects", 
                content: CV_DATA.projects.map(proj => 
                    `${proj.name}\n${proj.description}\nTechnologies: ${proj.technologies.join(", ")}`
                ).join("\n\n")
            });
        }

        if (["skill", "technology"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Skills", 
                content: Object.entries(CV_DATA.skills)
                    .map(([category, skills]) => 
                        `${category.charAt(0).toUpperCase() + category.slice(1)}:\n${skills.join(", ")}`
                    ).join("\n\n")
            });
        }

        if (["volunteer", "voluntary"].some(word => lowerQuestion.includes(word))) {
            relevantSections.push({ 
                title: "Volunteer Work", 
                content: CV_DATA.volunteer.map(vol => 
                    `${vol.role} at ${vol.organization} (${vol.period})\n${vol.description}`
                ).join("\n\n")
            });
        }

        if (lowerQuestion.includes("language")) {
            relevantSections.push({ 
                title: "Languages", 
                content: CV_DATA.skills.languages.join("\n")
            });
        }

        return relevantSections;
    };

    const sendMessage = async () => {
        if (!input.trim()) return;
    
        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
    
        // Show "Typing..." before fetching response
        setMessages((prev) => [...prev, { text: "Typing...", sender: "bot", typing: true }]);
    
        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ session_id: "user1", query: input })
            });
    
            if (!response.body) {
                throw new Error("No response body received.");
            }
    
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let botResponse = "";
    
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                botResponse += decoder.decode(value, { stream: true });
            }
            
            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { text: botResponse.trim(), sender: "bot" };
                return updated;
            });
            
            // Find and set relevant CV sections
            const relevantSections = findRelevantCVSections(input);
            if (relevantSections.length > 0) {
                const formattedContext = relevantSections
                    .map(section => `${section.title}:\n${section.content}`)
                    .join("\n\n");
                setCvContext(formattedContext);
            } else {
                setCvContext("");
            }
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { text: "Error: Unable to fetch response.", sender: "bot" };
                return updated;
            });
        }
    };

    const scrollToContent = () => {
        setShowFullContent(true);
        setTimeout(() => {
            mainContentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <Box sx={{ 
            flexGrow: 1, 
            backgroundColor: darkMode ? "#1a1a1a" : "#ffffff", 
            minHeight: "100vh",
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Navigation */}
            <AppBar 
                position="static" 
                elevation={0}
                sx={{ 
                    backgroundColor: 'transparent',
                    borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
                    py: 2
                }}
            >
                <Toolbar sx={{ 
                    maxWidth: 1200,
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: 600,
                            color: darkMode ? '#fff' : '#333'
                        }}
                    >
                        Ömer Faruk Büyükbas
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <IconButton 
                            onClick={toggleDarkMode} 
                            sx={{ 
                                color: darkMode ? '#fff' : '#333',
                                '&:hover': { backgroundColor: 'transparent' }
                            }}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </IconButton>
                        <Box sx={{ 
                            display: 'flex', 
                            gap: 1,
                            ml: 5,
                            border: `1px solid ${darkMode ? '#333' : '#ddd'}`,
                            borderRadius: 2,
                            p: 0.5
                        }}>
                            <IconButton 
                                onClick={() => toggleLanguage('en')}
                                sx={{ 
                                    color: language === 'en' ? (darkMode ? '#fff' : '#333') : (darkMode ? '#666' : '#999'),
                                    backgroundColor: language === 'en' ? (darkMode ? '#333' : '#f0f0f0') : 'transparent',
                                    width: 32,
                                    height: 32,
                                    fontSize: '0.75rem',
                                    '&:hover': { backgroundColor: darkMode ? '#333' : '#f0f0f0' }
                                }}
                            >
                                EN
                            </IconButton>
                            <IconButton 
                                onClick={() => toggleLanguage('de')}
                                sx={{ 
                                    color: language === 'de' ? (darkMode ? '#fff' : '#333') : (darkMode ? '#666' : '#999'),
                                    backgroundColor: language === 'de' ? (darkMode ? '#333' : '#f0f0f0') : 'transparent',
                                    width: 32,
                                    height: 32,
                                    fontSize: '0.75rem',
                                    '&:hover': { backgroundColor: darkMode ? '#333' : '#f0f0f0' }
                                }}
                            >
                                DE
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Welcome Section */}
            <Box sx={{ 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: { xs: 2, md: 4 }
            }}>
                <Typography 
                    variant="h1" 
                    sx={{ 
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 700,
                        mb: 2,
                        color: darkMode ? '#fff' : '#333'
                    }}
                >
                    {t('welcome')}
                </Typography>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 400,
                        color: darkMode ? '#ddd' : '#666',
                        maxWidth: 800,
                        margin: '0 auto',
                        lineHeight: 1.5
                    }}
                >
                    {t('profile')}
                </Typography>

                {/* Contact Links */}
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,
                    mt: 4,
                    mb: 4,
                    flexWrap: 'wrap'
                }}>
                    <IconButton 
                        href={CV_DATA.personal.linkedin} 
                        target="_blank"
                        sx={{ 
                            color: darkMode ? '#fff' : '#333',
                            '&:hover': { 
                                transform: 'scale(1.2)',
                                transition: 'transform 0.3s ease'
                            }
                        }}
                    >
                        <Linkedin size={28} />
                    </IconButton>
                    <IconButton 
                        href={CV_DATA.personal.github} 
                        target="_blank"
                        sx={{ 
                            color: darkMode ? '#fff' : '#333',
                            '&:hover': { 
                                transform: 'scale(1.2)',
                                transition: 'transform 0.3s ease'
                            }
                        }}
                    >
                        <Github size={28} />
                    </IconButton>
                    <IconButton 
                        href={`mailto:${CV_DATA.personal.email}`}
                        sx={{ 
                            color: darkMode ? '#fff' : '#333',
                            '&:hover': { 
                                transform: 'scale(1.2)',
                                transition: 'transform 0.3s ease'
                            }
                        }}
                    >
                        <Mail size={28} />
                    </IconButton>
                </Box>

                <IconButton 
                    onClick={scrollToContent}
                    sx={{ 
                        color: darkMode ? '#fff' : '#333',
                        '&:hover': { 
                            transform: 'translateY(5px)',
                            transition: 'transform 0.3s ease'
                        }
                    }}
                >
                    <ChevronDown size={40} />
                </IconButton>
            </Box>

            {/* Main Content */}
            <Box 
                ref={mainContentRef}
                sx={{ 
                    display: showFullContent ? 'block' : 'none',
                    maxWidth: 1200,
                    width: '100%',
                    margin: '0 auto',
                    px: { xs: 2, md: 4 },
                    py: 4
                }}
            >
                {/* Experience Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mb: 4,
                            color: darkMode ? '#fff' : '#333'
                        }}
                    >
                        {t('experience')}
                    </Typography>
                    {CV_DATA.experience.map((exp, index) => (
                        <Box 
                            key={index} 
                            sx={{ 
                                mb: 4,
                                p: 3,
                                backgroundColor: darkMode ? '#222' : '#f8f8f8',
                                borderRadius: 2,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <Typography 
                                variant="h4" 
                                sx={{ 
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    mb: 1,
                                    color: darkMode ? '#fff' : '#333'
                                }}
                            >
                                {exp.position}
                            </Typography>
                            <Typography 
                                sx={{ 
                                    color: darkMode ? '#ddd' : '#666',
                                    mb: 2
                                }}
                            >
                                {exp.company} | {exp.period}
                            </Typography>
                            <ul style={{ 
                                margin: 0,
                                paddingLeft: '20px',
                                color: darkMode ? '#ddd' : '#666'
                            }}>
                                {exp.description.map((desc, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>
                                ))}
                            </ul>
                        </Box>
                    ))}
                </Box>

                {/* Projects Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mb: 4,
                            color: darkMode ? '#fff' : '#333'
                        }}
                    >
                        {t('projects')}
                    </Typography>
                    <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 3
                    }}>
                        {CV_DATA.projects.map((proj, index) => (
                            <Box 
                                key={index}
                                sx={{ 
                                    p: 3,
                                    backgroundColor: darkMode ? '#222' : '#f8f8f8',
                                    borderRadius: 2,
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        mb: 2,
                                        color: darkMode ? '#fff' : '#333'
                                    }}
                                >
                                    {proj.name}
                                </Typography>
                                <ul style={{ 
                                    margin: 0,
                                    paddingLeft: '20px',
                                    color: darkMode ? '#ddd' : '#666',
                                    mb: 2
                                }}>
                                    {proj.description.map((desc, i) => (
                                        <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>
                                    ))}
                                </ul>
                                <Box sx={{ 
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1
                                }}>
                                    {proj.technologies.map((tech, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                backgroundColor: darkMode ? '#333' : '#e0e0e0',
                                                color: darkMode ? '#fff' : '#333',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            {tech}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Skills Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography 
                        variant="h3" 
                        sx={{ 
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            mb: 4,
                            color: darkMode ? '#fff' : '#333'
                        }}
                    >
                        {t('skills')}
                    </Typography>
                    <Box sx={{ 
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        gap: 3
                    }}>
                        {Object.entries(CV_DATA.skills).map(([category, skills]) => (
                            <Box 
                                key={category}
                                sx={{ 
                                    p: 3,
                                    backgroundColor: darkMode ? '#222' : '#f8f8f8',
                                    borderRadius: 2
                                }}
                            >
                                <Typography 
                                    variant="h4" 
                                    sx={{ 
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        mb: 2,
                                        color: darkMode ? '#fff' : '#333'
                                    }}
                                >
                                    {t(category)}
                                </Typography>
                                <Box sx={{ 
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 1
                                }}>
                                    {skills.map((skill, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                backgroundColor: darkMode ? '#333' : '#e0e0e0',
                                                color: darkMode ? '#fff' : '#333',
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem'
                                            }}
                                        >
                                            {skill}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Chat Section */}
                <Box sx={{ 
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 1000
                }}>
                    <IconButton 
                        onClick={toggleChat}
                        sx={{ 
                            backgroundColor: darkMode ? '#333' : '#f5f5f5',
                            color: darkMode ? '#fff' : '#333',
                            width: 50,
                            height: 50,
                            '&:hover': { 
                                backgroundColor: darkMode ? '#444' : '#e0e0e0'
                            }
                        }}
                    >
                        <MessageSquare size={24} />
                    </IconButton>
                </Box>

                {/* Chat Dialog */}
                {isOpen && (
                    <Card sx={{ 
                        position: 'fixed',
                        bottom: 80,
                        right: 20,
                        width: 350,
                        height: 500,
                        backgroundColor: darkMode ? '#222' : '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <CardContent sx={{ 
                            display: 'flex', 
                            flexDirection: 'column',
                            height: '100%',
                            p: 2
                        }}>
                            <Box sx={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 2
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {t('chat')}
                                </Typography>
                                <IconButton 
                                    onClick={toggleChat}
                                    size="small"
                                    sx={{ color: darkMode ? '#fff' : '#333' }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ 
                                flex: 1,
                                overflowY: 'auto',
                                mb: 2,
                                p: 1,
                                backgroundColor: darkMode ? '#333' : '#f5f5f5',
                                borderRadius: 1
                            }}>
                                {messages.map((msg, index) => (
                                    <Box key={index} sx={{ 
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                    }}>
                                        <Typography sx={{
                                            backgroundColor: msg.sender === 'user' 
                                                ? (darkMode ? '#1976d2' : '#007bff')
                                                : (darkMode ? '#333' : '#e0e0e0'),
                                            color: msg.sender === 'user' ? '#fff' : (darkMode ? '#fff' : '#333'),
                                            padding: '8px 12px',
                                            borderRadius: '12px',
                                            maxWidth: '80%'
                                        }}>
                                            {msg.text}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder={t('typeMessage')}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                                    size="small"
                                />
                                <Button 
                                    variant="contained" 
                                    onClick={sendMessage}
                                    sx={{ 
                                        minWidth: 'auto',
                                        backgroundColor: darkMode ? '#1976d2' : '#007bff'
                                    }}
                                >
                                    {t('send')}
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                )}
            </Box>
        </Box>
    );
};

export default Chatbot;
