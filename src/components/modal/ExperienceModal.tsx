import React, { useState } from 'react';
import { IWorkExperience } from '../../types/types';

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
    <div key="1">Page 1: {data.description}</div>,
    <div key="2">Page 2: More details about {data.title}</div>,
    <div key="3">Page 3: Achievements and highlights</div>,
    <div key="4">Page 4: Additional information</div>,
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
            ✖
          </button>
          <h2>{data.title}</h2>
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
        <div className="experience-modal__footer">
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
