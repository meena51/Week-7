// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="content">
        <h1>Theme Toggle Example</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default App;
