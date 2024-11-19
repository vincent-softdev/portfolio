import hero from "../img/hero-avartar.png"
import arrow from "../img/arrow.png"
import logo from "../img/logo.png"
import delta_cognition_logo from "../img/delta_cognition_logo.jpeg"
import swinburne_logo from "../img/swinburne_logo.jpeg"
import { IProject, ISkill, IWorkExperience } from "../types/types"
import html_icon from "../img/skills/html.png"
import css_icon from "../img/skills/css.webp"
import scss_icon from "../img/skills/scss.png"
import facebook_clone from "../img/facebook_clone.png"
import smart_novel from "../img/smart_novel.png"
import microsoft_sql_icon from "../img/skills/microsoft-sql-server.svg"
import circle_src from "../img/shape/ellipse_circle.png"
import wire_big_src from "../img/shape/ellipse_wire_big.png"
import wire_l2_src from "../img/shape/ellipse_l2.png"
import wire_l3_src from "../img/shape/ellipse_l3.png"
import wire_l4_src from "../img/shape/ellipse_l4.png"
import wire_l5_src from "../img/shape/ellipse_l5.png"

export const info = {
    name: "The Vinh (Vincent) Ly",
    position: "Full Stack Developer | Front-end Developer"
}

export const images = {
    logo_src: logo,
    hero_src: hero,
    arrow_src: arrow
}

export const workExperience: IWorkExperience[] = [
    {
        id: 1,
        title: "Delta Cognition",
        logo: delta_cognition_logo,
        description: "Full-Stack Software Engineer - Contract"
    },
    {
        id: 2,
        title: "Swinburne University of Technology",
        logo: swinburne_logo,
        description: "Full-Stack Software Engineer - Internship"
    }
]

export const skillIndustryIcons: ISkill[] = [
    {
        id: 1,
        name: "html",
        src: html_icon
    },
    {
        id: 2,
        name: "css",
        src: css_icon
    },
    {
        id: 3,
        name: "scss",
        src: scss_icon
    }
]

export const skillSchoolIcons: ISkill[] = [
    {
        id: 1,
        name: "microsoft sql",
        src: microsoft_sql_icon
    }
]

export const skillShape = [
    {id: 0, src: logo},
    {id: 1, src: circle_src},
    {id: 2, src: wire_big_src}, 
    {
        id: 3,
        src: wire_l2_src
    }, 
    {
        id: 4,
        src: wire_l3_src
    }, 
    {
        id: 5,
        src: wire_l4_src
    }, 
    {
        id: 6,
        src: wire_l5_src
    }
]

export const projectList: IProject[] = [
    {
        id: 1,
        name: "Facebook Clone",
        description: "Developed a close replica of Facebook to deepen expertise in full-stack development, including user authentication with Firebase, friend management, real-time updates, and skeleton loaders for an optimized user experience. Recreated Facebook’s UI/UX, closely aligning with its workflows and interactions to provide an authentic look and feel.",
        src: facebook_clone,
        time: "Sep 2024 – Nov 2024",
        demo: "https://facebook-clone-hosting-55491.firebaseapp.com/",
        github: "https://github.com/vincent-softdev/facebook-clone-hosting"
    },
    {
        id: 2,
        name: "Smart Novel",
        description: "Developed a novel-centric platform where users can post and explore novels, featuring automated chapter summaries to help readers discover novels suited to their interests. Built with React and TypeScript for a dynamic, type-safe interface and integrated Firebase for real-time data management. Applied S.O.L.I.D principles for scalable code and implemented CI/CD pipelines for streamlined deployment and quality control, using Prettier for consistent formatting.",
        src: smart_novel,
        time: "Nov 2024 – Present",
        demo: "https://smartnovel-e0696.firebaseapp.com/",
        github: "https://github.com/vincent-softdev/smart_novel"
    },
    {
        id: 3,
        name: "Portfolio",
        description: "Developed a novel-centric platform where users can post and explore novels, featuring automated chapter summaries to help readers discover novels suited to their interests. Built with React and TypeScript for a dynamic, type-safe interface and integrated Firebase for real-time data management. Applied S.O.L.I.D principles for scalable code and implemented CI/CD pipelines for streamlined deployment and quality control, using Prettier for consistent formatting.",
        src: smart_novel,
        time: "Nov 2024 – Nov 2024",
        demo: "https://vincently.dev/",
        github: "https://github.com/vincent-softdev/portfolio"
    }
]