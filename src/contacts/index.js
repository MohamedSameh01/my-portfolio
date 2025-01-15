import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const ABOUT_TEXT = `I am a dedicated frontend developer with a strong focus on building responsive, dynamic web applications. With nearly a year of professional experience in remote and freelance projects, I have developed a solid foundation in modern web development, specializing in React.js and JavaScript frameworks.

I’ve worked on diverse projects, such as creating a platform for auctioning Saudi League players' merchandise and designing a charity-oriented web application. Additionally, my experience collaborating with clients from Saudi Arabia and Sweden has enhanced my ability to adapt to different project needs and deliver results efficiently.

You can find further details about my skills and experience in my attached resume. I am excited to bring my expertise to your organization and would greatly appreciate any referrals for frontend development roles.

Thank you for your consideration, and I look forward to the opportunity to contribute to your team.
`;

export const HERO_CONTENT = `I'm  poised to propel your company towards greater success by turning your business concepts into functional web applications. Specializing in Web Development using React JS, I also possess a solid understanding of various JavaScript frameworks, positioning me to deliver high-quality solutions efficiently.`;

export const EXPERIENCES = [
  {
    year: "2024 still",
    role: "Frontend Developer",
    company: "Freelancer",
    description: `I designed and implemented 'Insaniah', a charity-focused web application and a wangen pizza shop .`,
    technologies: ["HTML", "CSS", "Javascript", "Tailwind Css", "React,js"],
  },
  {
    year: "jun 2024 - mar 2024",
    role: "Junior Frontend Developer",
    company: "Al Adaa",
    description: `Auctiony is a web application that allows fans to participate in auctions for t-shirts and
    merchandise from their favorite Saudi league players and clubs.
    - Built core functionalities for Auctiony, integrating APIs to manage data flow between auctions,
    player/club information, and user actions.
    jedah, saudia arabia
    - Enhanced user experience by creating a bilingual website (Arabic & English) and contributing to
    styling edits
    - Gained experience in back-end development through contributions to Node.js tasks and basic
    MongoDB data management`,
    technologies: ["HTML", "CSS", "Javascript", "Tailwind Css", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Wangen Pizza",
    image: project1,
    description: `•Designed and developed a front-end for a Swiss pizza restaurant website using React.js
•Implemented features for online ordering, table reservation, and contact form submission.
•Integrated a shopping cart and facilitated local payment via Twint.
•Utilized Redux Toolkit for efficient state management and SwiperJS for creating sliders.
•Streamlined user experience with React Router DOM for seamless navigation. (Optional) Briefly mention the Stripe
integration and removal upon client request, showcasing your adaptability.
Everything in the project was done based on the client's wishes, even the programing languages used.`,
    technologies: [
      "React",
      "Redux-Toolkit",
      "React-Rouer-Dom",
      "Framer-Motion",
      "React-Icons",
    ],
    url: "https://www.pizzawangen.ch/",
  },
  {
    title: "Gosto",
    image: project2,
    description: `•Developed Gosto, a React.js e-commerce web app for phone mockups.
•Implemented user-friendly search, cart, & filtering for a seamless shopping experience.
•Built with React Router, Redux Toolkit & Sass for smooth navigation & management.
•Offers trendy phone mockups with a focus on variety.`,
    technologies: [
      "React",
      "Redux-Toolkit",
      "React-Rouer-Dom",
      "Framer-Motion",
    ],
    url: "https://gosto-eight.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "tailwind-CSS", "Framer-Motion"],
    url: "https://mohamed-sameh-murex.vercel.app/",
  },
  {
    title: "Insaniah",
    image: project4,
    description: `•Built a charity web app (HTML, CSS, JS) to gather donations for global communities.
•Designed & developed user-friendly interface for promoting social impact & generosity.
•Showcased web development skills for a cause I care about.
"Everything in the project was done based on the client's wishes, even the programing languages used.`,
    technologies: ["HTML", "CSS", "js"],
    url: "https://insaniah.vercel.app/",
  },
];

export const CONTACT = {
  address: "Saudia Arabia",
  phoneNo: "+966 53 293 7544",
  email: "ms7100100@gmail.com",
};
