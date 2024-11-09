// src/pages/Home/Home.tsx

import React from 'react';
import me from '../../img/self.png';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import classNames from 'classnames';
import Style from './Home.module.scss';
import { info } from '../../constant/info';

interface HomeProps {
  innerRef?: React.RefObject<HTMLElement>;
}

const Home: React.FC<HomeProps> = ({ innerRef }) => {
  return (
    <Box
      ref={innerRef}
      component="main"
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 175px)"
      id="home"
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt="image of developer"
        style={{ background: info.gradient }}
        component="img"
        src={me}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius="50%"
        p="0.75rem"
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component="ul" p="0.8rem">
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box display="flex" gap="1.5rem" justifyContent="center" fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
