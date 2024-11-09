import Home from './pages/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import React from 'react';
import { Box } from '@mui/material';

interface SinglePageRoutesProps {
    refs: {
        refHome: React.RefObject<HTMLElement>;
        refAbout: React.RefObject<HTMLElement>;
        refPortfolio: React.RefObject<HTMLElement>;
    };
}

export default function SinglePageRoutes({ refs }: SinglePageRoutesProps) {
    return (
        <Box mt={'3rem'}>
            <Home innerRef={refs.refHome} />
            <About innerRef={refs.refAbout} />
            <Portfolio innerRef={refs.refPortfolio} />
        </Box>
    );
}
