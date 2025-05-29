import personaprep from '../assets/personaprep.png';
import greensupermarket from '../assets/greensupermarket.png';
import studentaccom from '../assets/student_accommodation.png';
import hotelmanagement from '../assets/hotelmanagement.png';
import cookit from '../assets/cookit.png';
import react from '../assets/react.png';
import php from '../assets/php.png';
import html from '../assets/html.png';
import csharp from '../assets/c-sharp.png';
import cbodima from '../assets/campusBodima.png';
import pwnedChcker from '../assets/pwnedchecker.png';
import python from '../assets/python.png';
import nextjs from '../assets/nextjs.png';
import blogsphere from '../assets/blogsphere.png';
import tastelanka from '../assets/tastelanka.png';
import springBoot from '../assets/springboot.png';

export const Bio = {
    name: "Ishuwara Avarjana",
    roles: [
        "Full Stack Developer",
        "Mobile app Developer",
        "UI/UX Designer",
        "Programmer",
    ],
    description:
        "An aspiring Software Engineering student with a passion for coding and problem-solving.",
    github: "https://github.com/ishuwaraa",
    resume: "https://drive.google.com/drive/folders/1zI9NupEeQk1WfFT3NgimHEoahIaJVDH7?usp=sharing",
    linkedin: "https://www.linkedin.com/in/ishuwara-avarjana-a83872253/",
    instagram: "https://www.instagram.com/ishuwara._",
};
  
export const skills = [
    {
        title: "Frontend",
        skills: [
          {
            name: "HTML",
            image: html,
          },
          {
            name: "CSS",
            image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
          },
          {
              name: "JavaScript",
              image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
          },
          {
              name: "React Js",
              image:  react,
          },
          {
              name: "NextJs",
              image: nextjs,
          },
          {
              name: "Flutter",
              image:
              "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
          },
        ],
    },
    {
        title: "Backend",
        skills: [
        {
            name: "MySQL",
            image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
            name: "Firebase",
            image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
        {
            name: "SpringBoot",
            image: springBoot,
        },
        {
          name: "Python",
          image: python,
        },
        {
          name: "c#",
          image: csharp,
        },
        {
            name: "PHP",
            image: php,
        }
        ],
    },
];
  
export const education = [
    {
        id: 0,
        img: "",
        school: "NSBM",
        date: "Sep 2022 - May 2025",
        grade: "",
        desc: "I am currently pursuing a Bachelor's degree in Software Engineering at NSBM Green University. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web app development and Mobile app development, among others.",
        degree: "BSc hons in Software Engineering - Plymouth University",
    },
];
  
export const projects = [
    {
      id: 0,
      title: "TasteLanka",
      description:
        "A restaurant discovery platform with AI-powered natural language search and real-time chat, built using MERN, Flask, and Sentence Transformers.",
      image: tastelanka,
      tags: [
        "MERN",
        "Python",
        "NLP",
        "AWS S3",
        "Google Maps API"
      ],
      github: "https://github.com/Ishuwaraa/tastelanka",
    },   
    {
      id: 1,
      title: "Campus Bodima",
      description:
        "A platform for students to find their university accommodation and share their opinions about the places they've stayed.",
      image: cbodima,
      tags: [
        "MERN",
        "AWS S3",
        "JWT",
        "Google Maps API"
      ],
      github: "https://github.com/Ishuwaraa/campus-bodima",
    },   
    {
      id: 2,
      title: "PersonaPrep",
      description:
        "A CV generator for NSBM Students with an AI interview simulator and a Corporate Analytical Dashboard",
      image: personaprep,
      tags: [
        "React",
        "Firebase",
      ],
      github: "https://github.com/DarrenVictoria/PersonaPrep",
    },   
    {
      id: 3,
      title: "Green Supermarket",
      description:
        "An E-commerce website integrated with Paypal sandbox and Java mail API.",
      image: greensupermarket,
      tags: [
        "Java",
        "MySql",
        "JavaMail",
        "Paypal",
      ],
      github: "https://github.com/Ishuwaraa/GREEN-Supermarket",
    },   
    {
      id: 4,
      title: "CookIt",
      description:
        "A recipe app where users can share recipes with others and with the options to add comments and dave their favourites recipes.",
      image: cookit,
      tags: [
        "Flutter",
        "Firebase",
        "Android",
        "ios",
      ],
      github: "https://github.com/Ishuwaraa/cookit",
    },   
    {
      id: 5,
      title: "Student Accommodation",
      description:
        "A web-based application for landlords to post their Ads and students to reserve a property through the website",
      image: studentaccom,
      tags: [
        "PHP",
        "MySql",
        "Google Maps API",
      ],
      github: "https://github.com/Ishuwaraa/Student-accommodation-system",
    },   
    {
      id: 6,
      title: "Pwned Checker TgBot",
      description:
        "A Telegram Bot to check whether your password has been compromised in data breaches.",
      image: pwnedChcker,
      tags: [
        "Python",
        "HaveIBeenPwned API",
      ],
      github: "https://github.com/Ishuwaraa/pwned-checker-telegrambot",
    },   
    {
      id: 7,
      title: "BlogSphere",
      description:
        "A blogging platform created using NextJs to enable users to manage and interact with blogs.",
      image: blogsphere,
      tags: [
        "NextJs",
        "MongoDb",
        "OAuth",
      ],
      github: "https://github.com/Ishuwaraa/blogsphere-nextjs",
    },   
    {
      id: 8,
      title: "Hotel Management System",
      description:
        "A windows form applications to register customers, add bookings, and update room availabilities.",
      image: hotelmanagement,
      tags: [
        "C#",
        "WinForms",
      ],
      github: "https://github.com/Ishuwaraa/Hotel-Management-System",
    },   
];