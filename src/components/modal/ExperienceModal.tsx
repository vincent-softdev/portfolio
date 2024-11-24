import React, { useState } from 'react';
import { IWorkExperience } from '../../types/types';
import CloseIcon from '@mui/icons-material/Close';

type ExperienceModalProps = React.HTMLAttributes<HTMLDivElement> & {
  modal: boolean;
  toggleModal: () => void;
  data: IWorkExperience;
};

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  className,
  data,
  modal,
  toggleModal,
  ...rest
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageContent = [
    <div key="1">
      <h1>Description</h1>
      <p>{data.description}</p>
    </div>,
    <div key="2">
      <h1>Daily Tasks</h1>
      <ul>
        {data.detail.daily.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>,
    <div key="3">
      <h1>Key Achievements</h1>
      <ul>
        {data.detail.achievement.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>,
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div {...rest} className={`${className} experience-modal`}>
      <div className="experience-modal__overlay" onClick={toggleModal}></div>
      <div className="experience-modal__content">
        <div className="experience-modal__header">
          <button className="experience-modal__close" onClick={toggleModal}>
            <CloseIcon className="experience-modal__close--icon" />
          </button>
          <h1>
            <img src={data.logo} alt="Company Logo" />
            {data.title}
          </h1>
        </div>
        <div className="experience-modal__content--time">
          Working time:<p> {data.time}</p>
        </div>
        <div className="experience-modal__body">
          <div className="experience-modal__pages">
            {/* Animate page changes */}
            <div
              className="experience-modal__page"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
                display: 'flex',
              }}
            >
              {pageContent.map((content, index) => (
                <div
                  key={index}
                  className="experience-modal__page-content"
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                  }}
                >
                  {content}
                </div>
              ))}
            </div>
          </div>
          <div className="experience-modal__pagination">
            {pageContent.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  currentPage === index ? 'active' : ''
                }`}
                onClick={() => handlePageChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
