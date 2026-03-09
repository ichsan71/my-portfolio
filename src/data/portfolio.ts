import type {
  Project,
  Skill,
  NavLink,
  SocialLink,
  Experience,
  Achievement,
  Education,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/ichsankamil", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ichsankamil",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:ichsan.kamil71@gmail.com",
    icon: "email",
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Kotlin", icon: "kotlin", level: 92, category: "languages" },
  { name: "Dart", icon: "dart", level: 90, category: "languages" },
  { name: "Java", icon: "java", level: 82, category: "languages" },
  { name: "Swift", icon: "swift", level: 70, category: "languages" },
  { name: "Python", icon: "python", level: 68, category: "languages" },
  { name: "JavaScript", icon: "javascript", level: 72, category: "languages" },
  { name: "SQL", icon: "sql", level: 70, category: "languages" },

  // Mobile Development
  { name: "Flutter", icon: "flutter", level: 92, category: "mobile" },
  {
    name: "Jetpack Compose",
    icon: "compose",
    level: 88,
    category: "mobile",
  },
  { name: "Android SDK", icon: "android", level: 90, category: "mobile" },
  { name: "iOS Development", icon: "ios", level: 65, category: "mobile" },

  // Architecture & Design Patterns
  {
    name: "Clean Architecture",
    icon: "architecture",
    level: 90,
    category: "architecture",
  },
  { name: "MVVM", icon: "pattern", level: 88, category: "architecture" },
  { name: "MVC", icon: "pattern", level: 85, category: "architecture" },
  {
    name: "Android Lifecycle",
    icon: "lifecycle",
    level: 88,
    category: "architecture",
  },

  // Tools & Technologies
  {
    name: "Android Studio",
    icon: "androidstudio",
    level: 92,
    category: "tools",
  },
  { name: "VS Code", icon: "vscode", level: 88, category: "tools" },
  { name: "Xcode", icon: "xcode", level: 65, category: "tools" },
  { name: "Git & GitHub", icon: "git", level: 90, category: "tools" },
  { name: "Postman", icon: "postman", level: 85, category: "tools" },

  // Backend / API
  { name: "RESTful APIs", icon: "api", level: 88, category: "backend" },
  { name: "GraphQL", icon: "graphql", level: 72, category: "backend" },
  { name: "Firebase", icon: "firebase", level: 80, category: "backend" },
  { name: "JSON", icon: "json", level: 90, category: "backend" },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "IT Mobile Developer",
    company: "PT Mazta Farma",
    location: "Jakarta Barat, ID",
    type: "Full-time",
    period: "May 2025 — Present",
    description:
      "Leading mobile development for enterprise-grade applications used across sales, logistics, and e-commerce business units.",
    achievements: [
      "Led the development of MyBCO, an internal CRM mobile app used by the sales team to monitor KPI performance, perform location-based check-in/check-out, and manage hierarchical approval workflows",
      "Engineered MazGo, a courier management app enabling couriers to track performance metrics and process deliveries through QR/Barcode scanning, improving operational efficiency",
      "Contributed to Skinventory, a marketplace platform for skincare, beauty, and health products with scalable Flutter-based architecture",
      "Implemented modular and maintainable code structures using Clean Architecture principles across multiple internal applications",
      "Collaborated with Backend Engineers, QA, DevOps, Product Managers, and business stakeholders for stable feature releases",
      "Managed build configuration, versioning, and deployment pipelines for Google Play Store and Apple App Store",
    ],
    technologies: ["Flutter", "Dart", "Clean Architecture", "REST API", "Git"],
  },
  {
    id: 2,
    role: "Android Engineer",
    company: "UNIKOM Codelabs",
    location: "Bandung, ID",
    type: "Student Activity",
    period: "Jan 2022 — Sep 2024",
    description:
      "Practiced Android engineering with a focus on code quality, app performance, and community leadership.",
    achievements: [
      "Awarded Rector's scholarship by collaborating to build 4 internal software applications for UNIKOM",
      "Successfully accepted 15 new members from 176 applicants by leading the first complete online recruitment",
      "Accelerated learning of new members by holding talks and workshops on essential Android development",
      "Won 2 National winners and International finalist titles in technology competitions",
      "Published applications to Play Store and performed SDK versioning maintenance",
    ],
    technologies: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Flutter",
      "Android SDK",
    ],
  },
  {
    id: 3,
    role: "Machine Learning Cohort",
    company: "Bangkit Academy",
    location: "Bandung, ID",
    type: "Student Activity",
    period: "Feb 2023 — Jul 2023",
    description:
      "Participated in Google's Bangkit Academy program focusing on Machine Learning fundamentals and practical applications.",
    achievements: [
      "Completed intensive Machine Learning curriculum by Google, Tokopedia, Gojek & Traveloka",
      "Applied ML concepts to real-world capstone projects",
    ],
    technologies: ["Python", "TensorFlow", "Machine Learning"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "MyBCO",
    description:
      "An internal CRM mobile application designed for the sales team at PT Mazta Farma. The app enables real-time KPI performance monitoring, location-based check-in/check-out for field visits, and hierarchical approval workflows — streamlining sales operations and providing management with actionable insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Flutter", "Dart", "Clean Architecture", "REST API", "Google Maps"],
    role: "Lead Mobile Developer",
    features: [
      "Real-time KPI dashboards for sales performance tracking",
      "GPS-based check-in/check-out with geofencing validation",
      "Multi-level approval workflows with push notifications",
      "Offline-first architecture for field usage reliability",
    ],
  },
  {
    id: 2,
    title: "MazGo",
    description:
      "A courier management application that empowers delivery personnel to track performance metrics, process deliveries via QR/Barcode scanning, and optimize delivery routes. Built to improve operational efficiency of internal logistics workflows at PT Mazta Farma.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    tags: ["Flutter", "Dart", "Clean Architecture", "QR/Barcode Scanner"],
    role: "Mobile Developer",
    features: [
      "QR/Barcode scanning for delivery verification",
      "Real-time delivery tracking and status updates",
      "Performance metrics dashboard for couriers",
      "Route optimization and delivery history logs",
    ],
  },
  {
    id: 3,
    title: "Skinventory",
    description:
      "A marketplace platform focused on skincare, beauty, and health products. Supports both internal management dashboards and external customer-facing storefronts, built with Flutter for cross-platform reach and scalability.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
    tags: ["Flutter", "Dart", "Clean Architecture", "E-Commerce", "Firebase"],
    role: "Mobile Developer",
    features: [
      "Product catalog with advanced search and filtering",
      "Shopping cart and checkout flow with payment integration",
      "Internal management dashboard for inventory control",
      "User authentication and profile management",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "1st Runner Up & Audience Award",
    event: "AIC Compfest UI 2023 — University of Indonesia",
    year: "2023",
    icon: "trophy",
  },
  {
    id: 2,
    title: "International Finalist",
    event: "APICTA Awards 2023 — Hong Kong",
    year: "2023",
    icon: "globe",
  },
  {
    id: 3,
    title: "Qualify Round",
    event: "Microsoft Imagine Cup 2024 — Industry Category",
    year: "2024",
    icon: "star",
  },
  {
    id: 4,
    title: "Rector's Scholarship Recipient",
    event: "Universitas Komputer Indonesia — 3rd semester until graduation",
    year: "2021–2024",
    icon: "academic",
  },
];

export const education: Education = {
  degree: "Bachelor of Informatics Engineering",
  university: "Universitas Komputer Indonesia (UNIKOM)",
  location: "Bandung, ID",
  graduationDate: "September 2024",
  gpa: "3.68 / 4.0",
  scholarship: "Rector's Scholarship (3rd semester — Graduation)",
  coursework: [
    "Algorithms",
    "Data Structures",
    "Clean Code & Design Patterns",
    "Object-Oriented Programming",
    "Database Systems",
  ],
};

export const aboutMe = {
  name: "Muhammad Ichsan Kamil",
  title: "Mobile Engineer",
  tagline: "Building scalable mobile experiences with clean architecture",
  bio: `Mobile Engineer with professional experience developing scalable Native & Cross-platform mobile applications using best practices. Experienced in building internal enterprise systems and marketplace platforms, collaborating with cross-functional teams, and managing mobile application releases to production. Passionate about building maintainable, high-performance applications and continuously expanding expertise toward Fullstack Development and scalable system design.`,
  email: "ichsan.kamil71@gmail.com",
  phone: "+6285956177153",
  location: "Kab. Bogor, Indonesia",
  availability: "Open to relocation",
  resumeUrl: "#",
};
