import { workExperience } from '../constant/info';
import ExperienceCard from './card/ExperienceCard';

const WorkExperience = () => {
  return (
    <div className="work-experience" id="experiences">
      <h1>Work Experience</h1>
      <div className="work-experience__card">
        {workExperience.map((w) => {
          return <ExperienceCard key={w.id} {...w} />;
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
