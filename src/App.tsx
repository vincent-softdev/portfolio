import React from 'react';
import {BrowserRouter} from "react-router-dom";
import "./stylist/_styles.scss";
import BaseLayout from './components/BaseLayout';

function App() {
  return (
    <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
  );
}

export default App;
