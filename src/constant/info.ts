import hero from "../img/hero-avartar.png"
import arrow from "../img/arrow.png"
import logo from "../img/logo.png"
import delta_cognition_logo from "../img/delta_cognition_logo.jpeg"
import swinburne_logo from "../img/swinburne_logo.jpeg"
import { ISkill, IWorkExperience } from "../types/types"
import html_icon from "../img/skills/html.png"
import css_icon from "../img/skills/css.webp"
import scss_icon from "../img/skills/scss.png"
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