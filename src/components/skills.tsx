import {
  skillIndustryIcons,
  skillSchoolIcons,
  skillApplicationIcons,
  skillShape,
} from '../constant/info';
import SkillBagCard from './card/SkillBagCard';

const Skills = () => {
  return (
    <div className="skills">
      <h2>
        I am currently looking for a <span>Junior Full Stack Developer</span> |{' '}
        <span>Junior Front-end developer</span> position
      </h2>
      <p>Following are my skills bag</p>
      <div className="skills__bag">
        <p>Industry</p>
        <SkillBagCard skill_list={skillIndustryIcons} />
        <p>Application used</p>
        <SkillBagCard skill_list={skillApplicationIcons} />
        <p>School</p>
        <SkillBagCard skill_list={skillSchoolIcons} />
      </div>
      <div className="skills__shape">
        {skillShape.map((w) => {
          return (
            <div className={w.id === 0 ? 'hero-header__detail-avartar' : ''}>
              <img
                key={w.id}
                src={w.src}
                alt={w.src}
                className={w.id === 0 ? 'logo' : ''}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
