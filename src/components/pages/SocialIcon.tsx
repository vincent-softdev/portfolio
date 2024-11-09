import React from 'react';

interface SocialIconProps {
  link: string;
  icon: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, icon, label }) => (
  <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
    <i className={icon} aria-hidden="true" />
  </a>
);

export default SocialIcon;
