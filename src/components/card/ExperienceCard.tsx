import { IWorkExperience } from "../../types/types"

const ExperienceCard = (props: IWorkExperience) => {
    return (
        <div className="experience-card">
            <img src={props.logo} alt="logo" />
            <div className="experience-card__detail">
                <h1>{props.description}</h1>
                <p>{props.title}</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default ExperienceCard
