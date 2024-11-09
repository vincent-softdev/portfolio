// File: MultiPageRoutes.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';

interface MultiPageRoutesProps {
  refs?: {
    refHome?: React.RefObject<HTMLElement>;
    refAbout?: React.RefObject<HTMLElement>;
    refPortfolio?: React.RefObject<HTMLElement>;
  };
}

const MultiPageRoutes: React.FC<MultiPageRoutesProps> = ({ refs }) => {
  return (
    <Routes>
      <Route path="/" element={<Home innerRef={refs && refs.refHome} />} />
      <Route path="/about" element={<About innerRef={refs && refs.refAbout} />} />
      <Route path="/portfolio" element={<Portfolio innerRef={refs && refs.refPortfolio} />} />
    </Routes>
  );
};

export default MultiPageRoutes;
