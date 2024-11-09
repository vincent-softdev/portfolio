import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Stack } from '@mui/material';
import { info } from '../../constant/info';

interface PortfolioProps {
  innerRef?: React.RefObject<HTMLElement>;
}

const Portfolio: React.FC<PortfolioProps> = ({ innerRef }) => {
  return (
    <Box id="portfolio" ref={innerRef}>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
        {info.portfolio.map((project, index) => (
          <Box key={index} width={{ xs: '100%', md: '50%' }}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Portfolio;
