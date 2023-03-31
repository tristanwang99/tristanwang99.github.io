//  icons
import {
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/project1.png';
import Project2 from './assets/img/projects/project2.png';
import Project3 from './assets/img/projects/project3.png';
import Project4 from './assets/img/projects/project4.png';

// skills images
import Html5 from './assets/img/skills/html5.png';
import Css3 from './assets/img/skills/css3.png';
import Javascript from './assets/img/skills/javascript.png';
import React from './assets/img/skills/react.png';
import Photoshop from './assets/img/skills/adobe-photoshop.png';
import Indesign from './assets/img/skills/adobe-indesign.png';
import Figma from './assets/img/skills/figma.png';
import Java from './assets/img/skills/java.png';
import Cpp from './assets/img/skills/cpp.png';
import C from './assets/img/skills/c.png';
import Python from './assets/img/skills/python.png';
import Illustrator from './assets/img/skills/adobe-illustrator.png';
import Premiere from './assets/img/skills/adobe-premiere.png';
import Blender from './assets/img/skills/blender.png';
import Node from './assets/img/skills/node-js.png';
import Mongodb from './assets/img/skills/mongodb.png';
import Firebase from './assets/img/skills/firebase.png';
import Bootstrap from './assets/img/skills/bootstrap.png';

export const social = [
  {
    index: '1',
    href: 'https://github.com/aawang1999',
    icon: <FiGithub />,
  },
  {
    index: '2',
    href: 'https://www.linkedin.com/in/tristan-wang-b86676154',
    icon: <FiLinkedin />,
  }
];

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About',
    href: 'about',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Cardinal Park',
    category: 'UI/UX',
  },
  {
    id: '2',
    image: Project2,
    name: "Ray's Classroom",
    category: 'Web Dev',
  },
  {
    id: '3',
    image: Project3,
    name: 'Sleepmate',
    category: 'UI/UX',
  },
  {
    id: '4',
    image: Project4,
    name: 'Stanford Vox Clara',
    category: 'Graphic Design',
  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'UI/UX',
  },
  {
    name: 'Graphic Design',
  },
  {
    name: 'Web Dev',
  },
];

// skill
export const skills = [
  {
    image: Html5,
  },
  {
    image: Css3,
  },
  {
    image: Javascript,
  },
  {
    image: React,
  },
  {
    image: Photoshop,
  },
  {
    image: Indesign,
  },
  {
    image: Figma,
  },
  {
    image: Java,
  },
  {
    image: Cpp,
  },
  {
    image: C,
  },
  {
    image: Python,
  },
  {
    image: Illustrator,
  },
  {
    image: Premiere,
  },
  {
    image: Blender,
  },
  {
    image: Node,
  },
  {
    image: Mongodb,
  },
  {
    image: Firebase,
  },
  {
    image: Bootstrap,
  },
];

export const aboutNav = [
  {
    name: 'Education',
  },
  {
    name: 'Experience',
  },
  {
    name: 'Skills',
  },
];

export const experienceInfo = [
  {
    subtitle: 'Amazon Web Services | Sunnyvale, CA',
    title: 'SDE Intern',
    date: 'Jun 2022 - Sep 2022',
    description: 'On the MAKO-PEP team. Pitched project timeline & implementation plan to team lead & dev. manager. Developed customizable widget prototype for product detail pages.',
  },
  {
    subtitle: 'Sunway Education Group (42KL) | Kuala Lumpur, Malaysia',
    title: 'Business & Staff Intern',
    date: 'Dec 2020 - Apr 2021',
    description: 'Helped manage selection process for 42KL coding school. Graded assignments & mentored 15 students engaged in peer-to-peer learning.',
  },
  {
    subtitle: 'YPCloud Inc. | Taipei, Taiwan',
    title: 'Internet of Things Intern',
    date: 'Jun 2020 - Sep 2021',
    description: 'Worked directly under CEO (frmr. PM @ Acer). Developed microservices with Node-RED & JavaScript. Features include web-scraping, speech recognition & motion detection. Created user manuals & presented findings weekly.',
  },
  {
    subtitle: 'Stanford Vox Clara | Stanford, CA',
    title: 'Design Lead, frmr. President',
    date: 'Jan 2019 - Present',
    description: 'Lead team of 10 students to publish 2-3 magazines per year on issues of Christianity, faith & reason. Implemented & provided oversight on design of print issues & website.',
  },
  {
    subtitle: "Ray's Classroom | San Jose, CA",
    title: 'YouTuber & Webpage Developer',
    date: 'Sep 2017 - Present',
    description: 'Managed channel for Chinese speakers seeking U.S. citizenship. Launched website, created & published content about U.S. civics tests, immigration forms & English grammar. Achieved 1.57M total views.',
  }
];

export const educationInfo = [
  {
    subtitle: 'M.S. Computer Science (HCI)',
    title: 'Stanford University',
    date: 'Expected Jun 2024',
    description: "Coursework TBD"
  },
  {
    subtitle: 'B.S. Computer Science (HCI), Minor in Economics | GPA 3.52',
    title: 'Stanford University',
    date: 'Expected Jun 2023',
    description: "Computer Org. & Systems, Web Apps, Human-Computer Interaction, Object-Oriented Systems Design, Service Design, Computer Graphics & Imaging, Int'l Trade, Money & Banking",
  },
];

export const portfolioInfo = [
  {
    id: '1',
    title: 'Cardinal Park',
    image: Project1,
    skills: [Figma],
    description: 'A digital service design project aiming to help Stanford students find parking on campus more conveniently. This process involved user research, prototyping & iterating, culminating in a proposal & Figma UI wireframe.',
    link: 'https://www.figma.com/file/nCtt6xNUEiuoGk1sQV9Z1m/CardinalPark',
  },
  {
    id: '2',
    title: "Ray's Classroom",
    image: Project2,
    skills: [Html5, Css3, Javascript, Photoshop, Illustrator, Premiere],
    description: 'A YouTube channel & website for Chinese speakers seeking U.S. citizenship. This project involved creating content about U.S. civics tests, immigration forms & English grammar. The channel achieved 1.57M total views.',
    link: 'https://github.com/aawang1999/rays-classroom',
  },
  {
    id: '3',
    title: 'Sleepmate',
    image: Project3,
    skills: [Html5, Css3, Javascript, React, Figma],
    description: 'A React frontend mobile app mock-up that helps roommates regulate noise levels & improve sleeping quality. This project involved user research, interaction design & wireframing with Figma.',
    link: 'https://hci.stanford.edu/courses/cs147/2022/wi/projects/CaringFromWithin/Sleepmate',
  },
  {
    id: '4',
    title: 'Stanford Vox Clara',
    image: Project4,
    skills: [Photoshop, Indesign, Illustrator],
    description: 'A student-run magazine covering the topics of Christianity, faith & reason. This project involved implementing the design of the print issues & website.',
    link: 'https://www.stanfordvoxclara.com/issues',
  },
];