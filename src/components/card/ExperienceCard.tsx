import React from 'react';
import { IWorkExperience } from '../../types/types';
import ExperienceModal from '../modal/ExperienceModal';

const ExperienceCard = (props: IWorkExperience) => {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <div className="experience-card">
      <img src={props.logo} alt="logo" />
      <div className="experience-card__detail">
        <h1>{props.description}</h1>
        <p>{props.title}</p>
        <button onClick={toggleModal}>READ MORE</button>
      </div>
      {modal && (
        <ExperienceModal modal={modal} toggleModal={toggleModal} data={props} />
      )}
    </div>
  );
};

export default ExperienceCard;
