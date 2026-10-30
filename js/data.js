// Structured Database for Syllabus2Career Skill Graph Engine
window.S2C_DATA = {
    student: {
        name: "Varsha B R",
        university: "Dayananda Sagar University",
        branch: "Computer Science and Engineering",
        cohort: "2025–2029",
        semester: "Semester 3",
        studentId: "ENG25CS0164"
    },
    careers: [
        {
            id: "software-dev",
            title: "Software Developer",
            category: "Technology",
            description: "Build scalable backend systems and high-performance applications.",
            matchScore: 72,
            demand: "High Demand",
            coveredSkills: ["Java", "SQL", "Data Structures", "OOP Concepts"],
            missingSkills: ["Asynchronous JavaScript", "REST APIs", "Git Branching", "Docker"]
        },
        {
            id: "data-analyst",
            title: "Data Analyst",
            category: "Data & Analytics",
            description: "Transform raw university datasets into actionable business insights.",
            matchScore: 84,
            demand: "Growing Field",
            coveredSkills: ["SQL / DBMS", "Statistics", "Probability", "Python Fundamentals"],
            missingSkills: ["Pandas / NumPy", "Tableau", "Advanced Data Cleaning"]
        },
        {
            id: "cyber-analyst",
            title: "Cybersecurity Analyst",
            category: "Security",
            description: "Secure networks and audit application vulnerabilities.",
            matchScore: 54,
            demand: "Critical Need",
            coveredSkills: ["Computer Networks", "OS Architecture", "TCP/IP Protocol"],
            missingSkills: ["Penetration Testing", "Wireshark", "Cryptographic Protocols"]
        }
    ],
    mappingMatrix: [
        {
            subject: "Data Structures & Algorithms",
            concepts: "Trees, Graphs, Sorting, Hash Maps",
            industrySkill: "Algorithmic Problem Solving",
            role: "Software Developer"
        },
        {
            subject: "Database Management Systems",
            concepts: "Normalization, SQL Queries, ACID Properties",
            industrySkill: "Relational Database Design",
            role: "Backend / Data Analyst"
        },
        {
            subject: "Computer Networks",
            concepts: "OSI Model, TCP/IP, Socket Programming",
            industrySkill: "Network & Cloud Architecture",
            role: "Cloud / Security Engineer"
        },
        {
            subject: "Java Programming Lab",
            concepts: "Inheritance, Exception Handling, Collections",
            industrySkill: "Object-Oriented Design Patterns",
            role: "Software Developer"
        }
    ]
};