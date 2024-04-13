import personaprep from '../assets/personaprep.png';
import greensupermarket from '../assets/greensupermarket.png';
import studentaccom from '../assets/student_accommodation.png';
import hotelmanagement from '../assets/hotelmanagement.png';
import cookit from '../assets/cookit.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import php from '../assets/php.png';
import mui from '../assets/mui.png';
import html from '../assets/html.png';
import csharp from '../assets/c-sharp.png';

export const Bio = {
    name: "Ishuwara Avarjana",
    roles: [
        "Full Stack Developer",
        "Mobile app Developer",
        "UI/UX Designer",
        "Programmer",
    ],
    description:
        "I am a motivated and a versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/ishuwaraa",
    resume: "https://drive.google.com/file/d/1VhPRizW5VFBp4wbYjzpTY3oAAgIZ3WkI/view?usp=sharing",
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
              name: "Material UI",
              image: mui,
          },
          {
              name: "Bootstrap",
              image:
              "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
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
            name: "Java",
            image: java,
        },
        {
            name: "PHP",
            image: php,
        },
        {
            name: "c#",
            image: csharp,
        },
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
      title: "PersonaPrep",
      description:
        "A CV generator for NSBM Students with an AI interview simulator created using ChatGpt, Eleven Labs, and Whisper AI",
      image: personaprep,
      tags: [
        "React",
        "Firebase",
      ],
      github: "https://github.com/DarrenVictoria/PersonaPrep",
    },   
    {
      id: 1,
      title: "Green Supermarket",
      description:
        "An E-commerce website integrated with Paypal sandbox and Java mail API.",
      image: greensupermarket,
      tags: [
        "Java",
        "MySql",
        "JavaMail",
        "Paypal",
        "MVC",
      ],
      github: "https://github.com/Ishuwaraa/GREEN-Supermarket",
    },   
    {
      id: 2,
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
      id: 3,
      title: "Student Accommodation",
      description:
        "A web-based application for landlords to post their Ads and students to reserve a property through the website",
      image: studentaccom,
      tags: [
        "PHP",
        "MySql",
        "MVC",
        "Google Maps API",
      ],
      github: "https://github.com/Ishuwaraa/Student-accommodation-system",
    },   
    {
      id: 4,
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