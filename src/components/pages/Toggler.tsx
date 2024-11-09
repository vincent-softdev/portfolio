// src/components/Toggler/Toggler.tsx

import React from 'react';
import { Box } from '@mui/material';

interface TogglerProps {
  darkMode: boolean;
  handleClick: () => void;
}

const Toggler: React.FC<TogglerProps> = ({ darkMode, handleClick }) => {
  const transition = 'all 250ms ease';

  return (
    <Box
      fontSize="1.5rem"
      sx={{
        cursor: 'pointer',
        ':hover': { transform: 'translateY(-3px)', transition },
      }}
    >
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </Box>
  );
};

export default Toggler;
