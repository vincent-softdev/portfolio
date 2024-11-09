import React from 'react';

interface IconLinkProps {
  link: string;
  title: string;
  icon: string;
}

const IconLink: React.FC<IconLinkProps> = ({ link, title, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={icon} /> {title}
    </a>
  );
};

export default IconLink;
