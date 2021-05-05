import React, { Component } from 'react'
import { themeSwitcherWrapper } from './themeSwitcher.module.scss'


const themeSwitcher = () => 
    
{


function toggleTheme(e) {
  e.preventDefault();
  const currentTheme = document.getElementById('themeSwitcher')
if (currentTheme.className == "dark-theme" ) {
  currentTheme.className = "light-theme";
  localStorage.setItem('theme', currentTheme.className);
 
} else { 
  currentTheme.className = "dark-theme";
  localStorage.setItem('theme', currentTheme.className);
}
}
    return (
            <div className={themeSwitcherWrapper}>
      
        <button type="checkbox" onClick={toggleTheme} id="slider">  Nuit </button>
        <span className="slider round" />
      
      </div>
        )
    }

  
  export default themeSwitcher
  