import { projectList } from "../constant/info";
import ProjectCard from "./card/ProjectCard";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            {projectList.map((p, index) => (
                <ProjectCard key={p.id} {...p} isOdd={index % 2 !== 0} />
            ))}
        </div>
    );
};

export default Projects;