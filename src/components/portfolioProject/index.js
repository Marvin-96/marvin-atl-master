import React from 'react'
import Link from "gatsby-link"
import { portfolioProjectwrapper, projectImg ,projectDesc} from './portfolioProject.module.scss'

const portfolioProject = ({pImg , pTitle , pLink }) => {
    return (
      <div className={portfolioProjectwrapper} id="portfolioProject">
      <div className={projectImg} id="projectImg" data-scroll data-scroll-speed={1}>
        <Link href={pLink}>     
          <img src={pImg} style={{backgroundColor: '#000'}} alt="Black-Mamba-website" /> 
        </Link>
      </div>
      <div className={projectDesc} data-scroll data-scroll-speed={-1} id="projectDesc">
        <Link href={pLink}>
          <h2 id="projectImg"> {pTitle}</h2>
          <li> Site Web </li>
          <li> Site Web </li>
          <li> Site Web </li>
        </Link>
      </div>
    </div>
    )
}



export default portfolioProject

