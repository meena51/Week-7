// YourComponent.js

import React from 'react';
import { useTheme } from './ThemeContext';

function YourComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>This is Your Component</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default YourComponent;
