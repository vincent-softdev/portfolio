import { IProject } from '../../types/types';

interface ProjectCardProps extends IProject {
  isOdd: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      className={`project-card ${
        props.isOdd ? 'project-card--odd' : 'project-card--even'
      }`}
    >
      <div className="project-card__detail">
        <h1>{props.name}</h1>
        <p>{props.time}</p>
        <div className="project-card__detail__description">
          <p>{props.description}</p>
        </div>
        <div className="project-card__detail__actions">
          <a href={props.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={props.github} target="_blank" rel="noreferrer">
            GitHub repo
          </a>
        </div>
      </div>
      <div className="project-card__image">
        <img src={props.src} alt={`${props.name}`} />
      </div>
    </div>
  );
};

export default ProjectCard;
