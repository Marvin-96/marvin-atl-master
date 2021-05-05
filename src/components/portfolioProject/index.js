import React from 'react'
import { portfolioProjectwrapper, projectImg ,projectDesc} from './portfolioProject.module.scss'

const portfolioProject = (ok) => {
    return (
      <div className={portfolioProjectwrapper} id="portfolioProject">
      <div className={projectImg} id="projectImg" data-scroll data-scroll-speed={1}>
        <a href="projets/blackmamba.html">     
          <img src="https://source.unsplash.com/random/600x900" style={{backgroundColor: '#000'}} alt="Black-Mamba-website" /> 
        </a>
      </div>
      <div className={projectDesc} data-scroll data-scroll-speed={-1} id="projectDesc">
        <a href="projets/blackmamba.html">
          <h2 id="projectImg">Black Mamba </h2>
          <li> Site Web </li>
          <li> Site Web </li>
          <li> Site Web </li>
        </a>
      </div>
    </div>
    )
}



export default portfolioProject

