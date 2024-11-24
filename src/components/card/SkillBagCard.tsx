import { ISkill } from '../../types/types';

interface SkillBagCardProps {
  skill_list: ISkill[]; // Expecting an array of ISkill
}

const SkillBagCard = ({ skill_list }: SkillBagCardProps) => {
  return (
    <div className="skills__bag__detail">
      {skill_list.map((s) => {
        return (
          <div key={s.id} className="skills__bag__detail--item">
            <img src={s.src} alt={s.name} />
            <p>{s.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillBagCard;
