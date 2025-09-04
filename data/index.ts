export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export const experienceData = [
    {
        role: "Web Developer (Squarespace CMS)",
        company: "SM Technology",
        period: "June 2025 – Present",
        description: `
At SM Technology, I specialize in designing and developing professional websites using the Squarespace CMS platform for a wide range of clients. My role focuses on delivering visually appealing, responsive, and user-friendly digital solutions that align with client goals.`,
        responsibilities: [
            "Designing and customizing websites on Squarespace to meet diverse client requirements (business, healthcare, education, lifestyle, and more).",
            "Collaborating with clients to translate their vision into seamless and engaging online experiences.",
            "Implementing structured content workflows to ensure brand consistency across digital platforms.",
            "Troubleshooting technical issues and optimizing site performance for speed and usability.",
            "Staying updated with Squarespace features, design trends, and best practices to deliver modern, high-quality solutions.",
        ],
        logo: "https://i.ibb.co.com/kVchL9VF/sm-logo.png",
    },
];

export const projects = [
    {
        title: "LuxeMatches",
        description: "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
        features: [
            "Role-based Access & Authentication: Firebase Auth + JWT protection.",
            "Stripe Payment Integration for secure contact requests.",
            "Dynamic Filtering & Pagination: Filter biodata by age, gender, division."
        ],
        tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://luxe-matches-client.vercel.app/",
        github: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
    },
    {
        title: "WorkNest",
        description: "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
        features: [
            "Role-based dashboards: Admin, HR, Employee.",
            "Stripe integration for salary payments.",
            "Monthly progress tracking and work submission forms."
        ],
        tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://work-nest-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/work-nest-client",
    },
    {
        title: "StudySync",
        description: "Online assessment system with role-based feedback, leaderboards, PDF previews, and dark mode.",
        features: [
            "Admins can give marks & feedback. Users can submit assignments.",
            "PDF preview & notes on submission.",
            "Pagination, difficulty filters, dark/light mode, leaderboard."
        ],
        tech: ["React", "MongoDB", "Node.js", "Express", "JWT", "Firebase Authentication", "Tailwind CSS", "Axios", "SweetAlert2", "React Toastify", "Swiper.js", "React Awesome Reveal"],
        live: "https://online-assessment-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
    },
];

export const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Senior Developer, TechCorp",
        quote:
            "Working with you was an absolute pleasure. Your attention to detail, problem-solving ability, and creativity made the project a success.",
        avatar: "/avatars/avatar1.png",
    },
    {
        name: "Michael Lee",
        role: "Team Lead, DevSolutions",
        quote:
            "You consistently deliver high-quality work under tight deadlines. Your positive attitude and willingness to help others make you a valuable team member.",
        avatar: "/avatars/avatar2.png",
    },
    {
        name: "Emily Carter",
        role: "Project Manager, CodeWorks",
        quote:
            "Your ability to quickly adapt to new technologies and frameworks is impressive. I look forward to working with you on future projects.",
        avatar: "/avatars/avatar3.png",
    },
];

export const posts = [
    {
        title: "Why Performance Matters in Modern Web Apps",
        excerpt:
            "Explore how performance optimization impacts user experience, SEO, and business growth, with real-world case studies.",
        date: "August 20, 2024",
        image: "/blog/performance.jpg",
        slug: "/blog/performance-matters",
    },
    {
        title: "Scaling Applications with Microservices",
        excerpt:
            "Breaking down large monolithic apps into microservices can boost agility and scalability. Here's my journey applying it.",
        date: "July 15, 2024",
        image: "/blog/microservices.jpg",
        slug: "/blog/scaling-with-microservices",
    },
    {
        title: "Design Systems for Consistent UX",
        excerpt:
            "Design systems bring order to chaos. Learn how consistent design improves usability and speeds up development.",
        date: "June 5, 2024",
        image: "/blog/design-systems.jpg",
        slug: "/blog/design-systems",
    },
];



export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];