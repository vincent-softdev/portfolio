import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Navbar from './Navbar';
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../constant/info';
import useScrollObserver from '../hooks/useScrollObserver';
import { useLocation } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
  
  // Use the hook and pass the setActive function to update the active state
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);

  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode function
  function handleToggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  // Check for saved dark mode preference in localStorage
  useEffect(() => {
    const detectedDarkMode = JSON.parse(localStorage.getItem('darkMode') as string);
    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  // Create refs object to pass to MultiPageRoutes
  const refs = {
    refHome,
    refAbout,
    refPortfolio,
  };

  return (
    <Box className={darkMode ? 'dark' : 'light'}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
        </Grid>
        <Grid item flexGrow={1}>
          {singlePage ? (
            <MultiPageRoutes refs={refs} />
          ) : (
            <MultiPageRoutes />
          )}
        </Grid>
        <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
            <p>Template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
            <p>&copy; 2023</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BaseLayout;
