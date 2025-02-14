import projectImage1 from "./assets/project1.jpeg"
import projectImage2 from "./assets/project2.jpeg";
import projectImage3 from "./assets/project3.jpeg";
import projectImage4 from "./assets/project4.jpeg";
import projectImage5 from "./assets/project5.jpeg";
import projectImage6 from "./assets/project6.jpeg"
// import { FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaTwitter,FaDiscord } from "react-icons/fa";

export const PROJECTS = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "https://github.com/user/personal-portfolio",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      description:
        "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
      image: projectImage2,
      githubLink: "https://github.com/user/ecommerce-platform",
    },
    {
      id: 3,
      name: "Task Management Tool",
      description:
        "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
      image: projectImage3,
      githubLink: "https://github.com/user/task-management-tool",
    },
    {
      id: 4,
      name: "Weather App",
      description:
        "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
      image: projectImage4,
      githubLink: "https://github.com/user/weather-app",
    },
    {
      id: 5,
      name: "Blog Platform",
      description:
        "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
      image: projectImage5,
      githubLink: "https://github.com/user/blog-platform",
    },
    {
      id: 6,
      name: "Chat Application",
      description:
        "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
      image: projectImage6,
      githubLink: "https://github.com/user/chat-application",
    },
  ];
  
  export const BIO = [
    "I'm a passionate Full-Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB. I love building scalable web applications, optimizing performance, and crafting clean, user-friendly interfaces.",
    "What I Do",
"✔ Frontend Development – React.js, Tailwind CSS, Next.js",
"✔ Backend Development – Node.js, Express.js, MongoDB, Firebase",
"✔ Full-Stack Projects – API development, authentication, and real-time applications",
"✔ Problem-Solving – Data structures, algorithms, and system design",
"🚀 Achievements & Projects",
    "🏆 Winner of DevQuest Hackathon – Built an innovative web solution",
    "✅ Completed 5+ real-world projects – Including a Blog App, Code Snippet Manager & API Testing Dashboard",
    "📜 Certified in SQL (HackerRank) – Strong database management skills",
    "📩 Let’s Connect!",
    "If you’re looking for a developer to build something amazing or collaborate on a project, feel free to reach out!",
    "📧 Email: saurabh.kamanesaurabh68@gmail.com"
  ];

  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaNodeJs ,FaTwitter} from "react-icons/fa";
  import { BiLogoPostgresql } from "react-icons/bi"; 
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "2+ years",
    },
    {
      icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
      name: "Next.js",
      experience: "1+ year",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
      name: "Redis",
      experience: "1+ year",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "2+ years",
    },
    {
      icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "PostgreSQL",
      experience: "1+ year",
    },
  ];
  export const EXPERIENCES = [
    {
      title: "Lead Frontend Developer",
      company: "Innovative Tech Solutions",
      duration: "July 2020 - Present",
      description:
        "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
    },
    {
      title: "Frontend Engineer",
      company: "Digital Creations",
      duration: "February 2016 - June 2020",
      description:
        "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    {
      title: "Junior Web Developer",
      company: "Bright Future Technologies",
      duration: "August 2014 - January 2016",
      description:
        "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
    },
  ];
  
  
export const EDUCATION = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      duration: "September 2012 - June 2014",
      description:
        "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of California, Berkeley",
      duration: "September 2008 - June 2012",
      description:
        "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
    },
  ];

  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.instagram.com/saurabh_kamane_007/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/saurabhack",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/saurabh-kamane-3ba95331b/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];