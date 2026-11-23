window.portfolioData = {
  profile: {
    name: "Vanessa Valendhita Santoso",
    email: "vanessavalendhita@gmail.com",
    github: "https://github.com/vanessavlnn",
    linkedin: ""
  },

  projects: [
    {
      id: "sikat",
      title: "SIKAT",
      year: "2026",
      category: "Software Engineering",
      status: "In Development",
      role: "Full-Stack Developer & ML Engineer",
      summary: "Sistem Informasi Kesehatan Ayam Terintegrasi — a web-based poultry health management system with AI-powered disease detection from fecal images, integrated with IoT environmental monitoring.",
      stack: ["Python", "Flask", "TensorFlow", "React", "IoT", "PostgreSQL"],
      image: "",
      imageAlt: "SIKAT application dashboard",
      details: {
        overview: "SIKAT is a web-based integrated poultry health information system designed to assist farmers in monitoring flock health. It combines AI-based disease detection from fecal images with real-time environmental monitoring through IoT sensors.",
        problem: "Small-scale poultry farmers often lack access to veterinary expertise, leading to delayed disease identification and significant losses. Manual health monitoring is time-consuming and unreliable.",
        objective: "Build an accessible, integrated system that automates poultry disease detection using computer vision and provides real-time environmental monitoring to improve farm management decisions.",
        contribution: "Developed the full-stack web application, trained the CNN model for fecal image classification, designed the database schema, and integrated the IoT sensor data pipeline.",
        implementation: "The system uses a convolutional neural network (CNN) trained on a labeled dataset of poultry fecal images to classify potential diseases. Environmental data (temperature, humidity, ammonia levels) is collected via IoT sensors and displayed on a real-time dashboard. The backend is built with Flask and the frontend uses React.",
        features: [
          "AI-powered disease detection from fecal image uploads",
          "Real-time IoT environmental monitoring dashboard",
          "Historical health records and trend analysis",
          "Alert system for abnormal environmental conditions",
          "User-friendly interface for non-technical farmers"
        ],
        challenges: "Collecting and labeling a sufficient dataset of poultry fecal images was difficult. Ensuring the model generalizes well across different lighting conditions and camera qualities required significant data augmentation.",
        lessons: "Learned about deploying ML models in resource-constrained environments, integrating IoT data streams with web applications, and designing user interfaces for non-technical audiences."
      },
      links: {
        repository: "https://github.com/vanessavlnn"
      }
    },
    {
      id: "ecoguard",
      title: "EcoGuard",
      year: "2025",
      category: "Mobile Development",
      status: "Completed",
      role: "Mobile Developer",
      summary: "An Android application for environmental monitoring and reporting, enabling users to document and track ecological concerns in their communities.",
      stack: ["Kotlin", "Android Studio", "Firebase", "Google Maps API"],
      image: "",
      imageAlt: "EcoGuard mobile app screens",
      details: {
        overview: "EcoGuard is an Android-based environmental monitoring app that empowers community members to report and track ecological issues such as pollution, illegal dumping, and deforestation.",
        objective: "Create a mobile platform that makes environmental reporting accessible and actionable for community members and local authorities.",
        contribution: "Led mobile development using Kotlin and Android Studio. Implemented Firebase integration for real-time data sync, Google Maps API for location-based reporting, and the reporting workflow.",
        implementation: "Built with Kotlin following MVVM architecture. Uses Firebase Firestore for data storage, Firebase Auth for user management, and Google Maps API for geolocation features. Reports include photos, descriptions, GPS coordinates, and severity classification.",
        features: [
          "Location-based environmental issue reporting",
          "Photo documentation with GPS tagging",
          "Real-time report tracking and status updates",
          "Community feed of nearby environmental reports",
          "Integration with Google Maps for visualization"
        ],
        challenges: "Handling offline scenarios gracefully while ensuring data consistency when the device reconnects was a significant challenge.",
        lessons: "Strengthened understanding of Android architecture components, Firebase integration patterns, and designing for intermittent connectivity."
      },
      links: {
        repository: "https://github.com/vanessavlnn"
      }
    },
    {
      id: "unity-game",
      title: "2D Platformer Game",
      year: "2025",
      category: "Game Development",
      status: "Completed",
      role: "Game Developer",
      summary: "A 2D platformer game built with Unity and C#, featuring multiple levels, enemy AI, collectibles, and physics-based gameplay mechanics.",
      stack: ["C#", "Unity", "2D Physics"],
      image: "",
      imageAlt: "Unity 2D platformer gameplay",
      details: {
        overview: "A side-scrolling 2D platformer game built in Unity as a game development course project. Features multiple levels with increasing difficulty, enemy AI patterns, collectible items, and physics-based movement mechanics.",
        objective: "Learn game development fundamentals including game loops, physics simulation, sprite animation, and level design through building a complete playable game.",
        contribution: "Sole developer — designed and implemented all gameplay systems, enemy AI behavior, level layouts, UI, and game state management.",
        features: [
          "Multiple levels with progressive difficulty",
          "Enemy AI with patrol and chase behaviors",
          "Physics-based character movement and jumping",
          "Collectible items and scoring system",
          "Game state management (menu, play, pause, game over)"
        ],
        challenges: "Balancing difficulty across levels while keeping gameplay engaging. Implementing responsive controls that feel natural on different frame rates.",
        lessons: "Gained practical experience with Unity's component system, C# scripting, 2D physics, and iterative game design through playtesting."
      },
      links: {}
    },
    {
      id: "portfolio-site",
      title: "Personal Portfolio Website",
      year: "2026",
      category: "Web Development",
      status: "In Development",
      role: "Designer & Developer",
      summary: "This portfolio — a custom-built static website using vanilla HTML, CSS, and JavaScript with a data-driven architecture and playful tech design identity.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "",
      imageAlt: "Portfolio website preview",
      details: {
        overview: "A personal portfolio website designed and built from scratch to showcase projects, research, skills, and experience. Uses a data-driven approach where all content is managed through a single JavaScript data file.",
        objective: "Create a distinctive, memorable portfolio that reflects my personality as an Informatics student who enjoys building things and exploring technology.",
        contribution: "Full design and development — from concept and visual identity to responsive implementation and content architecture.",
        features: [
          "Custom Playful Tech design identity",
          "Data-driven content architecture",
          "Responsive design across all devices",
          "Project case study pages with detailed breakdowns",
          "Research detail pages with methodology sections",
          "Accessibility features and reduced-motion support"
        ],
        lessons: "Practiced designing a cohesive visual system, structuring content for maintainability, and balancing creative expression with usability."
      },
      links: {}
    }
  ],

  research: [
    {
      id: "poultry-disease-detection",
      title: "Poultry Disease Detection from Fecal Images Using Convolutional Neural Networks",
      year: "2026",
      status: "In Progress",
      topic: "Computer Vision · Deep Learning",
      summary: "Investigating CNN architectures for automated classification of poultry diseases based on visual analysis of fecal samples, aiming to provide accessible diagnostic tools for small-scale farmers.",
      stack: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      details: {
        abstract: "This research explores the application of convolutional neural networks (CNNs) for automated poultry disease detection through fecal image analysis. The study evaluates multiple CNN architectures on a custom-labeled dataset to determine the most effective approach for classifying common poultry diseases.",
        objective: "Develop and evaluate a CNN-based classification system capable of identifying common poultry diseases from fecal images with sufficient accuracy for practical deployment in small-scale farming environments.",
        methodology: "A dataset of poultry fecal images was collected and labeled by category. Multiple CNN architectures were trained and compared using transfer learning. Data augmentation techniques were applied to address class imbalance and improve generalization.",
        data: "Custom dataset of labeled poultry fecal images collected from local farms, supplemented with publicly available veterinary reference images. Images were preprocessed, augmented, and split into training, validation, and test sets.",
        approach: "Transfer learning using pre-trained CNN models fine-tuned on the domain-specific dataset. Architectures compared include variations of established models adapted for the classification task.",
        evaluation: "Models evaluated using accuracy, precision, recall, F1-score, and confusion matrix analysis on a held-out test set.",
        findings: "Research is currently in progress. Preliminary results show promising classification performance on the validation set, but further evaluation and testing are needed.",
        limitations: "Dataset size is limited. Image quality varies due to different capture conditions. The model has not yet been validated in real-world deployment scenarios.",
        contribution: "Dataset collection and labeling, model training and evaluation pipeline, literature review, and experimental design."
      },
      links: {
        repository: "https://github.com/vanessavlnn"
      }
    }
  ],

  toolkit: [
    {
      title: "Languages",
      code: "</>",
      items: ["Python", "C#", "Kotlin", "Java", "C", "C++"]
    },
    {
      title: "Development",
      code: "DEV",
      items: ["Android Development", "Unity Development", "Web Development", "Object-Oriented Programming"]
    },
    {
      title: "AI & Data",
      code: "AI",
      items: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Visualization"]
    },
    {
      title: "Tools & Platforms",
      code: "///",
      items: ["Git", "GitHub", "Google Colab", "Android Studio", "VS Code", "Unity"]
    }
  ],

  journey: [
    {
      period: "2024 — Present",
      kind: "EDUCATION",
      title: "Bachelor of Informatics",
      organization: "Universitas Multimedia Nusantara",
      summary: "Studying Informatics with coursework in software engineering, AI/ML, database systems, web and mobile development.",
      facts: ["GPA 3.65 / 4.00", "Coursework: Software Engineering, AI, ML, Database Systems"]
    },
    {
      period: "2025 — Present",
      kind: "WORK EXPERIENCE",
      title: "Tutor",
      organization: "Miss Susan Learning Center",
      summary: "Teaching Mathematics, Physics, and ICT to middle and high school students following international curricula; adapting methods and materials to individual student needs."
    },
    {
      period: "2026",
      kind: "COMMUNITY SERVICE",
      title: "Project Member",
      organization: "UMN Community Service Program",
      summary: "Coordinated between faculty and participants, managed attendance and data collection, and supported activity logistics."
    },
    {
      period: "2025",
      kind: "ORGANIZATION",
      title: "Charity Division Member",
      organization: "COMMFEST 2025",
      summary: "Contacted potential sponsors, developed sub-event programs, and served as PIC for participant groups during the event."
    },
    {
      period: "2025",
      kind: "ORGANIZATION",
      title: "Treasurer",
      organization: "FIKOM NIGHT 2025",
      summary: "Managed income and expenditure records, monitored funding needs, and prepared financial accountability reports."
    },
    {
      period: "2024 — 2025",
      kind: "WORK EXPERIENCE",
      title: "Barista & Cook",
      organization: "KOCIL Jakarta",
      summary: "Supported food and beverage preparation, inventory management, order handling, and daily café operations."
    },
    {
      period: "2024",
      kind: "ORGANIZATION",
      title: "Competition Division Member",
      organization: "COMMFEST 2024",
      summary: "Designed a pitching competition program, structured participant rules and flow, and helped coordinate event execution."
    }
  ],

  highlights: [
    {
      year: "2025 · COMPETITION",
      title: "2nd Place Winner",
      description: "CIMB Niaga Software Engineering Pitching Competition"
    },
    {
      year: "2025 · HUAWEI ICT ACADEMY",
      title: "HCIA-openGauss V1.0 Course",
      description: "Database fundamentals, architecture, deployment & operations"
    },
    {
      year: "2025 · HUAWEI ICT ACADEMY",
      title: "HCIA-AI V4.0 Course",
      description: "Artificial intelligence, machine learning, deep learning, and AI frameworks"
    }
  ]
};
