import hero from '../img/hero-avartar.png';
import arrow from '../img/arrow.png';
import logo from '../img/logo.png';
import delta_cognition_logo from '../img/delta_cognition_logo.jpeg';
import swinburne_logo from '../img/swinburne_logo.jpeg';
import { IProject, ISkill, IWorkExperience } from '../types/types';
import html_icon from '../img/skills/html.png';
import css_icon from '../img/skills/css.webp';
import scss_icon from '../img/skills/scss.png';
import facebook_clone from '../img/facebook_clone.png';
import smart_novel from '../img/smart_novel.png';
import microsoft_sql_icon from '../img/skills/microsoft-sql-server.svg';
import php from '../img/skills/php.png';
import flask from '../img/skills/flask.png';
import circle_src from '../img/shape/ellipse_circle.png';
import wire_big_src from '../img/shape/ellipse_wire_big.png';
import wire_l2_src from '../img/shape/ellipse_l2.png';
import wire_l3_src from '../img/shape/ellipse_l3.png';
import wire_l4_src from '../img/shape/ellipse_l4.png';
import wire_l5_src from '../img/shape/ellipse_l5.png';
// footer
import phone from '../img/phone-icon.png';
import email from '../img/gmail-logo.webp';
import linkedin from '../img/LinkedIn-Logo.svg';
import github from '../img/github-logo.png';

export const info = {
  name: 'The Vinh (Vincent) Ly',
  position: 'Full Stack Developer | Front-end Developer',
};

export const images = {
  logo_src: logo,
  hero_src: hero,
  arrow_src: arrow,
};

export const workExperience: IWorkExperience[] = [
  {
    id: 1,
    title: 'Delta Cognition',
    logo: delta_cognition_logo,
    role: 'Full-Stack Software Engineer - Contract',
    time: 'Aug 2022 – Feb 2024 (1 year and 7 months)',
    description:
      'Delta Cognition is a team of AI specialists dedicated to solving complex global challenges through innovative and high-quality AI solutions, providing not only technical fixes but also valuable business insights.',
    detail: {
      daily: [
        'Optimised page performance by refining the front end using React, Flutter, Dart, Tailwind CSS, JSON, TypeScript, and SCSS, while enhancing the back end with a Python-based REST API.',
        'Improved application stability by identifying and resolving bugs, optimising performance, and enhancing overall reliability and efficiency.',
        'Selected to mentor and onboard new staff, providing guidance on best practices to enhance team productivity.',
        'Designed and developed a mobile application using Flutter and Dart, creating a streamlined mobile version of the company’s core project, and deployed the product to diverse devices using Docker.',
      ],
      achievement: [
        'Initiated and implemented a new project milestone using Next.js, Azure Cloud, Single Sign-On, and PostgreSQL—technologies that were new to both me and the company. Successfully delivered the milestone within a month, meeting the target deadline.',
        'Initiated and contributed to the development of three projects from concept to completion, showcasing full project lifecycle management.',
        'Spearheaded frontend enhancements in the data transfer system, increasing speed by 6x and reducing transfer time from over 2 minutes to under 30 seconds.',
      ],
    },
  },
  {
    id: 2,
    title: 'Swinburne University of Technology',
    logo: swinburne_logo,
    role: 'Full-Stack Software Engineer - Internship',
    time: 'Nov 2020 – Mar 2021 (5 months)',
    description:
      'Swinburne is a globally recognised university in Melbourne focused on producing future-ready graduates, fostering innovation, and advancing research.',
    detail: {
      daily: [
        'Responsible for managing and implementing new features using HTML, JSON, XML, CSS3, PHP, and MySQL.',
        'Developed an interactive web interface for Arduino, enabling users to connect to and control Arduino devices directly through a browser.',
        'Implemented embedded designs using Arduino and hardware, integrating software and hardware components for seamless interaction.',
      ],
      achievement: [],
    },
  },
];

export const skillIndustryIcons: ISkill[] = [
  {
    id: 1,
    name: 'html',
    src: html_icon,
  },
  {
    id: 2,
    name: 'css',
    src: css_icon,
  },
  {
    id: 3,
    name: 'scss',
    src: scss_icon,
  },
  {
    id: 4,
    name: 'flask',
    src: flask,
  },
];

export const skillSchoolIcons: ISkill[] = [
  {
    id: 1,
    name: 'microsoft sql',
    src: microsoft_sql_icon,
  },
  {
    id: 2,
    name: 'PHP',
    src: php,
  },
];

export const skillShape = [
  { id: 0, src: logo },
  { id: 1, src: circle_src },
  { id: 2, src: wire_big_src },
  {
    id: 3,
    src: wire_l2_src,
  },
  {
    id: 4,
    src: wire_l3_src,
  },
  {
    id: 5,
    src: wire_l4_src,
  },
  {
    id: 6,
    src: wire_l5_src,
  },
];

export const projectList: IProject[] = [
  {
    id: 1,
    name: 'Facebook Clone',
    description:
      'Developed a close replica of Facebook to deepen expertise in full-stack development, including user authentication with Firebase, friend management, real-time updates, and skeleton loaders for an optimized user experience. Recreated Facebook’s UI/UX, closely aligning with its workflows and interactions to provide an authentic look and feel.',
    src: facebook_clone,
    time: 'Sep 2024 – Nov 2024',
    demo: 'https://facebook-clone-hosting-55491.firebaseapp.com/',
    github: 'https://github.com/vincent-softdev/facebook-clone-hosting',
  },
  {
    id: 2,
    name: 'Smart Novel',
    description:
      'Developed a novel-centric platform where users can post and explore novels, featuring automated chapter summaries to help readers discover novels suited to their interests. Built with React and TypeScript for a dynamic, type-safe interface and integrated Firebase for real-time data management. Applied S.O.L.I.D principles for scalable code and implemented CI/CD pipelines for streamlined deployment and quality control, using Prettier for consistent formatting.',
    src: smart_novel,
    time: 'Nov 2024 – Present',
    demo: 'https://smartnovel-e0696.firebaseapp.com/',
    github: 'https://github.com/vincent-softdev/smart_novel',
  },
  {
    id: 3,
    name: 'Portfolio',
    description:
      'Developed a novel-centric platform where users can post and explore novels, featuring automated chapter summaries to help readers discover novels suited to their interests. Built with React and TypeScript for a dynamic, type-safe interface and integrated Firebase for real-time data management. Applied S.O.L.I.D principles for scalable code and implemented CI/CD pipelines for streamlined deployment and quality control, using Prettier for consistent formatting.',
    src: smart_novel,
    time: 'Nov 2024 – Nov 2024',
    demo: 'https://vincently.dev/',
    github: 'https://github.com/vincent-softdev/portfolio',
  },
];

export const footer = {
  icons: {
    phone: {
      value: '(+61) 478 646 929',
      icon: phone,
      active: false,
    },
    email: {
      value: 'vinh.ly.softdev@gmail.com',
      icon: email,
      active: false,
    },
    linkedin: {
      value: 'https://www.linkedin.com/in/the-vinh-ly/',
      icon: linkedin,
      active: true,
    },
    github: {
      value: 'https://github.com/vincent-softdev',
      icon: github,
      active: true,
    },
  },
};
